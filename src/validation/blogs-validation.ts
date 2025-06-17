import {BlogInputModel} from "../db/db-blogs-and-posts";
import {validationErrorType} from "../types/validationErrorType";

export const blogsInputDtoValidation = (data: BlogInputModel): validationErrorType[] => {
    const errors: validationErrorType[] = [];
    if (data.name.trim().length < 1 || data.name.trim().length > 15) {
        errors.push({ field: 'name', message: 'Invalid name' });
    }

    if (data.description.trim().length < 1 || data.description.trim().length > 500) {
        errors.push({ field: 'description', message: 'Invalid description' });
    }

    if (data.websiteUrl.trim().length > 100) {
        errors.push({ field: 'websiteUrl', message: 'Website URL must not exceed 100 characters' });
    }

    const urlPattern = /^https:\/\/([a-zA-Z0-9_-]+\.)+[a-zA-Z0-9_-]+(\/[a-zA-Z0-9_-]+)*\/?$/;
    if (data.websiteUrl.trim().length > 0 && !urlPattern.test(data.websiteUrl.trim())) {
        errors.push({ field: 'websiteUrl', message: 'Invalid website URL format' });
    }

    return errors;
}