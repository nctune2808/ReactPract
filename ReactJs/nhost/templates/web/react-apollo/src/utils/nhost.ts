import { NhostClient } from "@nhost/nhost-js";
// https://hasura-ae0fa339.nhost.app/v1/graphql

// const nhost = createClient({
//   baseURL: " https://hasura-ae0fa339.nhost.app/v1/graphql",
// });


const nhost = new NhostClient({
  backendUrl: "https://ikpptbiuzcthddrdmdlp.nhost.run",
});

export { nhost };
