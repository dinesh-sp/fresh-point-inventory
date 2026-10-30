import { useEffect, useState } from "react";
import { data } from "../data";
import { GridRowModel } from "@mui/x-data-grid";
import { useAddcashFlowMutation, useAddledgerMutation } from "../slice";
import { ledger, ledgershema, cashFlow, cashFlowshema } from "../schema";

export const BIGrid = (props: any) => {
  const [alert, setAlert] = useState<boolean>(false);
  const [gData, setGdata] = useState<Array<any>>(
    data.filter((x) => x.id != 102),
  );
  const [gtotal, setTdata] = useState(data.filter((x) => x.id === 102));
  const [addcashFlow, { isLoading: cfLoading }] = useAddcashFlowMutation();
  const [addledger, { isLoading: ledgerLoading }] = useAddledgerMutation();

  const processRowUpdate = async (newRow: GridRowModel) => {
    let response: GridRowModel;
    if (newRow.code === "Online") {
      const { transaction } = newRow;
      response = {
        ...newRow,
        toff: transaction,
        tatotal: transaction,
        tototal: transaction,
      };
    } else {
      const { transaction, toff } = newRow;
      const pattyCash = transaction - toff;
      response = {
        ...newRow,
        tatotal: newRow.id * Number(transaction),
        tototal: newRow.id * Number(toff),
        pattyCash: newRow.id * Number(pattyCash),
      };
    }
    setGdata((prev) =>
      prev.map((row) => (row.id === response.id ? response : row)),
    );
    return response;
  };

  const _handleAlertClick = () => {
    setAlert(!alert);
  };

  const _handleSubmit = async () => {
    if (Number(gtotal[0]["tatotal"] ?? 0) === 0) _handleAlertClick();
    else {
      const { pattyCash = 0, tototal = 0, tatotal = 0 } = gtotal[0];
      const lgr: ledger = {
        id: crypto.randomUUID(),
        ledger_date: new Date(),
        toff: tototal,
        patty_cash: pattyCash,
        total: tatotal,
      };
      const result = await ledgershema.safeParse(lgr);

      if (!result.success) {
        _handleAlertClick(); // console.log(result.error.flatten());
        return;
      }
      try {
        const ledgerResponse = await addledger(lgr).unwrap();
        gData.map((y) => {
          const cflist: cashFlow = {
            id: crypto.randomUUID(),
            ledger_id: ledgerResponse.id,
            code: y.code,
            tof_cnt: y.toff,
            tof_value: y.tototal,
            pty_cnt: y.transaction - y.toff,
            pty_value: y.pattyCash,
          };

          const result = cashFlowshema.safeParse(cflist);
          if (!result.success) {
            console.log("sds", {
              error: result.error,
              data: result.data,
              cflist,
            });
            _handleAlertClick(); // console.log(result.error.flatten());
            return;
          }
          addcashFlow(cflist);
        });
        console.log("Ledger and CashFlow saved successfully");
      } catch (error) {
        console.error(error);
        _handleAlertClick();
      }
    }
  };

  useEffect(() => {
    const { transaction, tatotal, tototal, toff, pattyCash } = gData.reduce(
      (acc, cashflow) => {
        acc.transaction += Number(cashflow.transaction || 0);
        acc.tatotal += Number(cashflow.tatotal || 0);
        acc.tototal += Number(cashflow.tototal || 0);
        acc.toff += Number(cashflow.toff || 0);
        acc.pattyCash += Number(cashflow.pattyCash || 0);

        return acc;
      },
      {
        transaction: 0,
        tatotal: 0,
        tototal: 0,
        toff: 0,
        pattyCash: 0,
      },
    );
    setTdata((prev: any[]) =>
      prev.map((item, index) =>
        index === 0
          ? {
              ...item,
              transaction,
              tatotal,
              toff,
              pattyCash,
              tototal,
            }
          : item,
      ),
    );
  }, [gData]);

  useEffect(() => {
    console.log("sds", {
      ledgerLoading,
      cfLoading,
      cm: ledgerLoading || cfLoading,
    });
    props.setFormIsLoad(ledgerLoading || cfLoading);
  }, [ledgerLoading || cfLoading]);

  return {
    gData,
    setGdata,
    gtotal,
    setTdata,
    processRowUpdate,
    _handleSubmit,
    cSnackbar: {
      msg: "should file any transaction",
      action: _handleAlertClick,
      state: alert,
    },
    loader: {
      form: ledgerLoading || cfLoading,
    },
  };
};
