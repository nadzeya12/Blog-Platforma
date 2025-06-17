"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
exports.db = {
    Blogs: [
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
    Posts: [
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
};
