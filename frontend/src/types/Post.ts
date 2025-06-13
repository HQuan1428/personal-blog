

export interface Post {
    id: string;
    title: string;
    supportText: string;
    categories: string[];
    date: string;
    image: string;
}

export const mockPosts: Post[] = [
    {
        id: "1",
        title: "Introduction to TypeScript",
        supportText: "Learn the basics of TypeScript and its powerful type system.",
        categories: ["Programming", "TypeScript", "Beginner"],
        date: "2025-05-20",
        image: "/images/image.jpg",
    },
    {
        id: "2",
        title: "Building a Next.js App",
        supportText: "A step-by-step guide to creating a modern web app with Next.js.",
        categories: ["Next.js", "Web Development", "React"],
        date: "2025-05-18",
        image: "/images/image.jpg",
    },
    {
        id: "3",
        title: "Mastering CSS Grid",
        supportText: "Explore advanced CSS Grid techniques for responsive layouts.",
        categories: ["CSS", "Web Design", "Intermediate"],
        date: "2025-05-15",
        image: "/images/image.jpg",
    },
    {
        id: "4",
        title: "Introduction to TypeScript",
        supportText: "Learn the basics of TypeScript and its powerful type system.",
        categories: ["Programming", "TypeScript", "Beginner"],
        date: "2025-05-20",
        image: "/images/image.jpg",
    },
    {
        id: "5",
        title: "Building a Next.js App",
        supportText: "A step-by-step guide to creating a modern web app with Next.js.",
        categories: ["Next.js", "Web Development", "React"],
        date: "2025-05-18",
        image: "/images/image.jpg",
    },
    {
        id: "6",
        title: "Mastering CSS Grid",
        supportText: "Explore advanced CSS Grid techniques for responsive layouts.",
        categories: ["CSS", "Web Design", "Intermediate"],
        date: "2025-05-15",
        image: "/images/image.jpg",
    },
];