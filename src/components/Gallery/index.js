import React from "react";
import PhotoList from "../Gallery/PhotoList";
import { capitalizeFirstLetter } from '../../utils/helpers';

// function Gallery(props) {
//     return (
//         <section>
//             <h1 data-testid="h1tag">{capitalizeFirstLetter(props.name)}</h1>
//             <p>{props.description}</p>
//             <PhotoList category={props.name} />
//         </section>
//     );
// }

function Gallery({ currentCategory }) {
    const { name, description } = currentCategory;
    return (
        <section>
            <h1 data-testid="h1tag">{capitalizeFirstLetter(name)}</h1>
            <p>{description}</p>
            <PhotoList category={currentCategory.name} />
        </section>
    );
}

export default Gallery;