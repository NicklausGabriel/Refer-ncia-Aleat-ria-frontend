import axios from 'axios';
const apiUrl = import.meta.env.VITE_API_URL;
const cliqueDesenhaImage = import.meta.env.VITE_API_URL;

export async function getImageUrl(): Promise<{ url: string, author: string }> {

    try {
        const response = await axios.get(`${apiUrl}/random-image`);
        return response.data;
    } catch {
        return { url: cliqueDesenhaImage, author: "Gabriel Ferreira" }
    }
}