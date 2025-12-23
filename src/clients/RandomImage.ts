import axios from 'axios';

export async function getImageUrl(): Promise<{ url: string, author:string }> {
    try {
        const response = await axios.get('http://localhost:3000/random-image');
        return response.data;
    } catch (error) {
        return { url: "https://i.pinimg.com/originals/56/d7/4c/56d74c15a2b5916c8413d0ce706eb8ac.gif", author:"Gabriel Ferreira" }
    }
}