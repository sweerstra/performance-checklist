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
                system {
                  uid
                }
            }
        }
        projects(uid: "blt761973ad0f210686") {
          title
          checked_items2
          system {
            uid
          }
          checkeditemsConnection {
            edges {
              node {
                ... on ChecklistItem {
                  system {
                    uid
                  }
                }
              }
            }
          }
        }
    }
`