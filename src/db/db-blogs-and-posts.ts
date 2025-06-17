export type BlogInputModel = {
    name: string,
    description: string,
    websiteUrl: string,
}
export type BlogViewModel = {
    id: string,
    name: string,
    description: string,
    websiteUrl: string,
}
export type PostInputModel = {
    title: string,
    shortDescription: string,
    content: string,
    blogId: string,
}
export type PostViewModel = {
    id: string,
    title: string,
    shortDescription: string,
    content: string,
    blogId: BlogViewModel["id"],
    blogName:string,
}
export const db = {
    Blogs: <BlogViewModel[]>[
        {
            id: "1",
            name: "Blog 1",
            description: "something for the description",
            websiteUrl: "https://blogs.google.com/",
        },
        {
            id: "2",
            name: "Blog 2",
            description: "something for the description",
            websiteUrl: "https://blogs.google.com/",
        },
        {
            id: "3",
            name: "Blog 3",
            description: "something for the description",
            websiteUrl: "https://blogs.google.com/",
        }
        ],
    Posts: <PostViewModel[]>[
        {
            id: "1",
            title: "Post 1",
            shortDescription: "description",
            content: "videos and posts",
            blogId: "1",
            blogName: "Blog 1",
        },
        {
            id: "2",
            title: "Post 2",
            shortDescription: "description",
            content: "posts",
            blogId: "2",
            blogName: "Blog 2",
        },
        {
            id: "3",
            title: "Post 3",
            shortDescription: "description",
            content: "news",
            blogId: "3",
            blogName: "Blog 3",
        }
    ]
}
