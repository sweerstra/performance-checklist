import { ChecklistItemModel, Discipline, Category, Framework } from '../interfaces/ChecklistItem';

export default [
    {
        slug: "lazy-loading-image",
        title: "Lazy load images and iframe",
        description: "Images below the fold should be only loaded when visible.",
        category: Category.JavaScript,
        disciplines: [Discipline.Frontend, Discipline.Backend],
        usage: `Showing an image below the fold is supported by most browsers native by the following code:

\`\`<img src="/image.png" lazy="loading" alt="" />\`\`

Please note that only images below the fold should be lazy-loaded. Prevent to lazy load images below the fold, lazy loading affects the caching. Discuss with the designer or productowner what the fold is. If you need to display a product list, you can add an index to the looped items to lazy load the images after the first 10.

## Example ##

### ProductList.vue ###
\`\`<product-tile
  v-for="(product, index) in products"
  :key="product.id"
  :lazy="index > 10"
/>\`\`

### ProductTile.vue ###
\`\`<li
  <img src="/image.png" :lazy="lazy" alt="" />
/>\`\`
`,
        solutions: [],
        canIUse: 'loading-lazy-attr',
    },
    {
        slug: "optimize-2",
        title: "Optimize another something",
        description: "Optimize something else description",
        category: Category.CSS,
        disciplines: [Discipline.Frontend],
        usage: ``,
        solutions: [
            {
                category: Framework.NextJs,
                description: "This is how you optimize in CSS"
            }
        ]
    }
] as ChecklistItemModel[];