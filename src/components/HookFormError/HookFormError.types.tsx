export interface ErrorItem {
    message: string;
    ref: {
        name: string;
    };
    type: 'string';
}

export interface Props {
    error: ErrorItem | undefined | object;
    errorMessage: string;
}
