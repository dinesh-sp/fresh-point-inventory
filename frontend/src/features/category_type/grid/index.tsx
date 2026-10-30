import { CusGrid } from "../../../components/common/Fields";
import { useGetCategoryTypeQuery } from "../slice";
import { Columns } from "./columns";

export const CTGrid = () => {
  const { data, isLoading } = useGetCategoryTypeQuery();
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
