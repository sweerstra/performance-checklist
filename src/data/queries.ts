import gql from 'graphql-tag';

export const GET_CHECKLIST = gql`
    query GetItems {
        all_item {
            items {
                category
                description
                disciplines
                title
                usage
            }
        }
    }
`