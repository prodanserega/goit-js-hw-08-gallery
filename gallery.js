import images from './gallery-items.js'

const galleryConteiner = document.querySelector(".js-gallery");


function galleryListMarkupCreate(images) {
  return images
    .map(({ preview, original, description }) => {
      return `
      <li class="gallery__item">
    <a
      class="gallery__link"
      href="${original}"
    >
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </li>`;
    })
    .join("");
}

const imgMarkupCreate = galleryListMarkupCreate(images);

galleryConteiner.insertAdjacentHTML('beforeend', imgMarkupCreate);


galleryConteiner.addEventListener('click', onGalleryConteinerClick)

function onGalleryConteinerClick(evt) {
  evt.preventDefault();
  const isSwathEl = evt.target.classList.contains("gallery__image");
   
  if (!isSwathEl) {
    return;
  }
 
}