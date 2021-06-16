import { ChecklistItemModel, Discipline, Solution, SolutionCategory } from '../interfaces/ChecklistItem';

export default [
    {
        title: "Optimize something",
        description: "Optimize something description",
        categoryId: "1",
        disciplines: [Discipline.Frontend, Discipline.Backend],
        solutions: [
            {
                category: SolutionCategory.JavaScript,
                description: "This is how you optimize in JS"
            }
        ]
    },
    {
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