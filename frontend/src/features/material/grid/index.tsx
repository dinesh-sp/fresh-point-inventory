import { CusGrid } from "../../../components/common/Fields";
import { useGetmaterialQuery } from "../slice";
import { Columns } from "./columns";

export const MGrid = () => {
   const { data, isLoading } = useGetmaterialQuery();
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
