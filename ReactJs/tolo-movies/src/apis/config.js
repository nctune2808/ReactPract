const configApi = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: 'ac004a0e39c2066a63a75eacce7367b8',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default configApi;