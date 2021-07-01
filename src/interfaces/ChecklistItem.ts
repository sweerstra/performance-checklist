export enum Discipline {
    Frontend = "Front-end",
    Backend = "Back-end",
    DevOps = "DevOps",
}

export enum SolutionCategory {
    NuxtJs = "Nuxt.js",
    NextJs = "Next.js",
    JavaScript = "JavaScript",
    CSS = "CSS",
    Images = "Images",
}

export interface Category {
    id: string,
    name: string,
}

export interface Solution {
    category: SolutionCategory,
    description: string,
}

export interface ChecklistItemModel {
    slug: string,
    title: string,
    description: string,
    categoryId: string,
    disciplines: Discipline[],
    solutions: Solution[],
};
