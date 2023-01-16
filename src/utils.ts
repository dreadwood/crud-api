export const validationData = (data: Record<string, unknown>): boolean => (
	typeof data?.username === 'string'
    && typeof data?.age === 'number'
    && Array.isArray(data?.hobbies)
    && data?.hobbies.every(hobby => typeof hobby === 'string')
);

export const normalizeUrl = (url: string) => url.replace(/^\/+|\/+$/g, '');
