// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";



const galleryWrapper = document.querySelector(".gallery");


function createLi(galleryItems) {

    return galleryItems.reduce((acc, img) => acc +
        `<a class="gallery__item" href="${img.original}"><img class="gallery__image" src="${img.preview}" alt="${img.description}"/></a>`, "");
}

const result = createLi(galleryItems);
galleryWrapper.insertAdjacentHTML("beforeend", result);
const lightbox = new SimpleLightbox('.gallery a', {
        captionsData: "alt",
        captionDelay: 250,
        captionPosition: "bottom",
    });