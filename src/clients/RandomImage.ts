import axios from 'axios';
const apiUrl = import.meta.env.VITE_API_URL;

export async function getImageUrl(): Promise<{ url: string, author: string }> {

    try {
        const response = await axios.get(`${apiUrl}/random-image`);
        return response.data;
    } catch (error) {
        return { url: "https://instagram.fplu19-1.fna.fbcdn.net/v/t51.82787-15/565068093_18063986855437566_6198060640980739487_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=104&ig_cache_key=Mzc3MTkwMTUyNjIwMjQzNTczMA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTQ0MC5zZHIuQzMifQ%3D%3D&_nc_ohc=ZA5ngsZoeyYQ7kNvwG82yeM&_nc_oc=AdlsKhWy0_BXjJBfQUtVsLFZ64WnOQFZiS02r4psK6DXZIxm-wyrqzVQ7m8aaYhnv7Q&_nc_ad=z-m&_nc_cid=1138&_nc_zt=23&_nc_ht=instagram.fplu19-1.fna&_nc_gid=2AX7N2YVj0Fydj-_majh6g&oh=00_Afm7zZzRr66VgnQ05f-elbzqm3FiRcH_i9CKe6EsfXNm6g&oe=69509E3F", author: "Gabriel Ferreira" }
    }
}