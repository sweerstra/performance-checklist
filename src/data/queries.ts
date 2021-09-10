import gql from 'graphql-tag';

export const GET_CHECKLIST = gql`
    query GetItems {
        all_checklist_item {
            items {
                url
                category
                description
                disciplines
                title
                usage
            }
        }
    }
`