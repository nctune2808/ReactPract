import 
{ useSubscribeCustomerSubscription, 
    useGetCustomersQuery, 
    useInsertCustomerMutation 
} from "../utils/__generated__/graphql";

export function Customers() {

    const {data, loading, error} = useSubscribeCustomerSubscription();

    console.log({data});
    


    return <div>Customers</div>
}