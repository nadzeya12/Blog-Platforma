import {PostInputModel} from "../db/db-blogs-and-posts";
import {validationErrorType} from "../types/validationErrorType";

export const postsInputDtoValidation = (data: PostInputModel): validationErrorType[] => {
    const errors: validationErrorType[] = [];
    if (data.title.trim().length < 1 || data.title.trim().length > 30) {
        errors.push({ message: 'Invalid title', field: 'title' });
    }

    if (data.shortDescription.trim().length < 1 || data.shortDescription.trim().length > 100) {
        errors.push({ message: 'Invalid shortDescription', field: 'shortDescription'});
    }

    if (data.content.trim().length > 1000) {
        errors.push({ message: 'Content must not exceed 1000 characters', field: 'content', });
    }
    if (data.blogId.trim().length < 1) {
        errors.push({ message: 'Invalid blogId', field: 'blogId'});
    }
    return errors;
}