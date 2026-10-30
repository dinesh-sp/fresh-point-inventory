import { useState } from "react";
import { CusForm } from "../../components/common/Layout";
import { CGrid } from "./grid";

export const cashflow = () => {
  const [formIsLoad, setFormIsLoad] = useState(false);

  const _handleLoad = (action: boolean) => setFormIsLoad(action);

  return (
    <CusForm
      action={{
        Cancle: () => {},
        Reset: () => {},
        Submit: () => {}, // handleSubmit(onSubmit),
        Close: () => {}, //  _handleClose,
      }}
      submitting={formIsLoad}
      footerAction={false}
      title=" Today Cash Flow"
      description="Daily Transaction"
    >
      {" "}
      <>
        <CGrid setFormIsLoad={_handleLoad} />
      </>
    </CusForm>
  );
};
