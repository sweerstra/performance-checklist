import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setClient } from "svelte-apollo";
import { setContext } from '@apollo/client/link/context';

const ENVIRONMENT_NAME = process.env.ENVIRONMENT_NAME;
const STACK_API_KEY = process.env.STACK_API_KEY;
const DELIVERY_TOKEN = process.env.DELIVERY_TOKEN;

const httpLink = createHttpLink({
    uri: `https://graphql.contentstack.com/stacks/${STACK_API_KEY}?environment=${ENVIRONMENT_NAME}`,
});

const authLink = setContext((_, { headers }) => {
    return {
        headers: {
            ...headers,
            access_token: DELIVERY_TOKEN
        }
    }
});

export function initializeApollo() {
    const client = new ApolloClient({
        link: authLink.concat(httpLink),
        cache: new InMemoryCache()
    });
    setClient(client);
}
