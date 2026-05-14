// These props are used throughout
// the web app to help create previews for
// each project interacted with.

export interface Project {
    id: number;
    title: string;
    date: string;
    image?: string;
    year: number;
    link?: string;
    repo?: string;
    video?: string
    thumbnail?: string;
    source?: "youtube" | "gif" | "local";
}