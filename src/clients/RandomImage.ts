import axios from 'axios';
const apiUrl = import.meta.env.VITE_API_URL;
const cliqueDesenhaImage = import.meta.env.VITE_API_URL;

type GetImageType = {
    category: string,
    page: number,
    index: number
}
export interface RandomImageResponse {
    author: string;
    url: string;
    likes: number;
    userPage: string;
    views: number;
}

export async function getImageUrl(props: GetImageType): Promise<RandomImageResponse> {

    try {
        const response = await axios.get(`${apiUrl}/random-image?category=${props.category}&page=${props.page}&index=${props.index}`);
        console.log(response.data.reference)
        return response.data.reference;
    } catch {
        return {
            url: cliqueDesenhaImage, author: "Gabriel Ferreira", likes: 0,
            userPage: "https://github.com/NicklausGabriel",
            views: 0
        }
    }
}