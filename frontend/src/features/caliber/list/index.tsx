import { Backdrop, CircularProgress } from "@mui/material";
import { CusGrid } from "../../../components/common/Fields";
import { useGetCaliberQuery } from "../slice/apiSlice";
import { Columns } from "./column";

export const List = () => {
  const { data, isLoading } = useGetCaliberQuery();
  return (
    <>
      <CusGrid
        columns={Columns}
        rows={data}
        extraProps={{ loading: isLoading }}
      />
    </>
  );
};
