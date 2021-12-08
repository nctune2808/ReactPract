import { useGetCustomersQuery } from "../utils/__generated__/graphql";

export function Customers() {

    const {data, loading, error} = useGetCustomersQuery();

    console.log({data});
    


    return <div>Customers</div>
}