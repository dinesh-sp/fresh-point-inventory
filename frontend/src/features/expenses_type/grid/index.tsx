import { CusGrid } from "../../../components/common/Fields";
import { useGetexpensesTypeQuery } from "../slice";
import { Columns } from "./columns";

export const ETGrid = () => {
   const { data, isLoading } = useGetexpensesTypeQuery();
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
