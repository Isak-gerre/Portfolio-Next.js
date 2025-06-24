export interface Project {
    id: number;
    title: string;
    category?: string;
    description: string;
    headerImage: string;
    altImage?: string;
    tags: string[];
    url: string;
    layoutStyle: 'row' | 'col';
    imageAlignment?: 'left' | 'right';
} 