export enum Discipline {
    Frontend = "Front-end",
    Backend = "Back-end",
    DevOps = "DevOps",
}

export enum Framework {
    NuxtJs = "Nuxt.js",
    NextJs = "Next.js",
}

export enum Category {
    JavaScript = "JavaScript",
    CSS = "CSS",
    Images = "Images",
    Server = "Server"
}

export interface ISolution {
    category: Framework,
    description: string,
}

export interface ChecklistItemModel {
    slug: string,
    title: string,
    description: string,
    usage?: string,
    category: Category,
    disciplines: Discipline[],
    solutions: ISolution[],
    canIUse?: string,
    links?: [string]
};
