import { Container } from "@mui/material";
import { useParams } from "react-router-dom"
import useSWR from "swr";
import spinner from "../../assets/images/bouncing-circles.svg";
import { Assignment, Folder } from "@mui/icons-material";
import Navbar from "../../components/navbar";

const getRecipe = (...args) => {
    //prepare url
    const url = new URL(...args);
    url.searchParams.append('apiKey', process.env.REACT_APP_SPOONACULAR_API_KEY);
    // fetch and return data
    return fetch(url).then(response => response.json());
}

export default function Recipe() {
    const { id } = useParams();
    const { data: recipe, isLoading } = useSWR(`http://localhost:4000/recipes/${id}`, getRecipe);

    console.log(recipe, isLoading);


    return (
        <>
        <Navbar/>
            {isLoading? <img src={spinner} /> : (
                <Container>
                    <h1>{recipe.title}</h1>
                    <div dangerouslySetInnerHTML={{__html: recipe.summary}}/>
                    <img src={recipe.image} />
                </Container>
            )}


        </>

    );


}

// Assignment
// 1.Button in the navbar with add new recipe placeholder 
// 2.create an add-recipe folder under the Pages, and an index.jsx file in the add-recipe folder 
// 3. import navabar and export default function AddRecipe 
// 4. add path in the App.js 
// 5. Use materialui to generate form code