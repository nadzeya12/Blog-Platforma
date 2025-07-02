export type BlogInputModel = {
    name: string,
    description: string,
    websiteUrl: string,
}
export type BlogViewModel = BlogModel & {id: string};
export type BlogModel = {

    name: string,
    description: string,
    websiteUrl: string,
    createdAt: string,
    isMembership: boolean,
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
    createdAt: string,
}
export const db = {
    Blogs: <BlogModel[]><unknown>[
        {
            id: "1",
            name: "Blog 1",
            description: "something for the description",
            websiteUrl: "https://blogs.google.com/",
            createdAt: "2019-03-14T00:00:00.000Z",
            isMembership: false,
        },
        {
            id: "2",
            name: "Blog 2",
            description: "something for the description",
            websiteUrl: "https://blogs.google.com/",
            createdAt: "2023-03-14T00:00:00.000Z",
            isMembership: false,
        },
        {
            id: "3",
            name: "Blog 3",
            description: "something for the description",
            websiteUrl: "https://blogs.google.com/",
            createdAt: "2024-03-14T00:00:00.000Z",
            isMembership: false,
        }
    ],
    Posts: <PostViewModel[]><unknown>[
        {
            id: "1",
            title: "Post 1",
            shortDescription: "description",
            content: "videos and posts",
            blogId: "1",
            blogName: "Blog 1",
            createdAt: "2023-04-14T00:00:00.000Z",
        },
        {
            id: "2",
            title: "Post 2",
            shortDescription: "description",
            content: "posts",
            blogId: "2",
            blogName: "Blog 2",
            createdAt: "2023-07-14T00:00:00.000Z",
        },
        {
            id: "3",
            title: "Post 3",
            shortDescription: "description",
            content: "news",
            blogId: "3",
            blogName: "Blog 3",
            createdAt: "2025-08-14T00:00:00.000Z",
        }
    ]
}
