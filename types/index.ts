export interface Project {
    id: number;
    slug: string;
    title: string;
    category?: string;
    tldr?: string;
    description: string;
    headerImage: string;
    altImage?: string;
    images?: string[];
    tags: string[];
    url: string;
    layoutStyle: 'row' | 'col';
    imageAlignment?: 'left' | 'right';
} 