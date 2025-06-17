import {validationErrorType} from "../../types/validationErrorType";

export const createErrorMessages = (
    errors: validationErrorType[],
): { errorMessages: validationErrorType[] } => {
    return { errorMessages: errors };
};