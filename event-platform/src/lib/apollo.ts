import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4osutal177k01w71i1a8bxq/master',
    cache: new InMemoryCache()
});