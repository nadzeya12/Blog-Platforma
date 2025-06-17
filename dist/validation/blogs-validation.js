"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.blogsInputDtoValidation = void 0;
const blogsInputDtoValidation = (data) => {
    const errors = [];
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
};
exports.blogsInputDtoValidation = blogsInputDtoValidation;
