import { ChecklistItemModel, Discipline, Category, Framework } from '../interfaces/ChecklistItem';

export default [
    {
        slug: "lazy-loading-image",
        title: "Lazy load images and iframe",
        description: "In general, it’s recommended to lazy-load all expensive components, such as heavy JavaScript, videos, iframes, widgets, and potentially images. Native lazy-loading is already available for images and iframes with the loading attribute (only Chromium). Under the hood, this attribute defers the loading of the resource until it reaches a calculated distance from the viewport.",
        category: Category.JavaScript,
        disciplines: [Discipline.Frontend, Discipline.Backend],
        solutions: [
            {
                category: Framework.NuxtJs,
                description: "This is how you optimize in JS"
            }
        ]
    },
    {
        slug: "optimize-2",
        title: "Optimize another something",
        description: "Optimize something else description",
        category: Category.CSS,
        disciplines: [Discipline.Frontend],
        solutions: [
            {
                category: Framework.NextJs,
                description: "This is how you optimize in CSS"
            }
        ]
    }
] as ChecklistItemModel[];