import {PostInputModel} from "../db/db-blogs-and-posts";
import {validationErrorType} from "../types/validationErrorType";

export const postsInputDtoValidation = (data: PostInputModel): validationErrorType[] => {
    const errors: validationErrorType[] = [];
    if (data.title.trim().length < 1 || data.title.trim().length > 30) {
        errors.push({ field: 'title', message: 'Invalid title' });
    }

    if (data.shortDescription.trim().length < 1 || data.shortDescription.trim().length > 100) {
        errors.push({ field: 'shortDescription', message: 'Invalid shortDescription' });
    }

    if (data.content.trim().length > 1000) {
        errors.push({ field: 'content', message: 'Content must not exceed 1000 characters' });
    }
    if (data.blogId.trim().length < 1) {
        errors.push({ field: 'blogId', message: 'Invalid blogId' });
    }
    return errors;
}