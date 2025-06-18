import {BlogInputModel} from "../db/db-blogs-and-posts";
import {validationErrorType} from "../types/validationErrorType";

export const blogsInputDtoValidation = (data: BlogInputModel): validationErrorType[] => {
    const errors: validationErrorType[] = [];
    if (data.name.trim().length < 1 || data.name.trim().length > 15) {
        errors.push({  message: 'Invalid name', field: 'name' });
    }

    if (data.description.trim().length < 1 || data.description.trim().length > 500) {
        errors.push({ message: 'Invalid description', field: 'description' });
    }

    if (data.websiteUrl.trim().length > 100) {
        errors.push({ message: 'Website URL must not exceed 100 characters', field: 'websiteUrl'  });
    }

    const urlPattern = /^https:\/\/([a-zA-Z0-9_-]+\.)+[a-zA-Z0-9_-]+(\/[a-zA-Z0-9_-]+)*\/?$/;
    if (data.websiteUrl.trim().length > 0 && !urlPattern.test(data.websiteUrl.trim())) {
        errors.push({  message: 'Invalid website URL format', field: 'websiteUrl'});
    }

    return errors;
}