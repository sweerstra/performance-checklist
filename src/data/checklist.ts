import { ChecklistItemModel, Discipline, Solution, SolutionCategory } from '../interfaces/ChecklistItem';

export default [
    {
        slug: "lazy-loading-image",
        title: "Lazy load images and iframe",
        description: "In general, it’s recommended to lazy-load all expensive components, such as heavy JavaScript, videos, iframes, widgets, and potentially images. Native lazy-loading is already available for images and iframes with the loading attribute (only Chromium). Under the hood, this attribute defers the loading of the resource until it reaches a calculated distance from the viewport.",
        categoryId: "1",
        disciplines: [Discipline.Frontend, Discipline.Backend],
        solutions: [
            {
                category: SolutionCategory.Images,
                description: "This is how you optimize in JS"
            }
        ]
    },
    {
        slug: "optimize-2",
        title: "Optimize another something",
        description: "Optimize something else description",
        categoryId: "2",
        disciplines: [Discipline.Frontend],
        solutions: [
            {
                category: SolutionCategory.CSS,
                description: "This is how you optimize in CSS"
            }
        ]
    }
] as ChecklistItemModel[];