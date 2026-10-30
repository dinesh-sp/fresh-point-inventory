import { CusGrid } from "../../../components/common/Fields";
import { useGetproductTypeQuery } from "../slice";
import { Columns } from "./columns";

export const PGrid = () => {
   const { data, isLoading } = useGetproductTypeQuery();
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
