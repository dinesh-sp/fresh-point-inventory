import { CusGrid } from "../../../components/common/Fields";
import { useGetbatchQuery } from "../slice";
import { Columns } from "./columns";

export const BGrid = () => {
  const { data, isLoading } = useGetbatchQuery();
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
