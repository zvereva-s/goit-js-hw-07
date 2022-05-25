import { galleryItems } from './gallery-items.js';

//! Глобальные переменные
const gallery = document.querySelector('.gallery');

function renderGalleryMarkup(arr) {

    const renderImgList = arr.map(({ description, preview, original}) => `
    <div class="gallery__item">
    <a class="gallery__link" href="${original}" loading="lazy">
    <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/ loading="lazy"></a></div>`).join('\n');

    
    gallery.insertAdjacentHTML('beforeend', renderImgList);
}
renderGalleryMarkup(galleryItems);

gallery.addEventListener('click', onModalOpen);

function onModalOpen(e) {
    e.preventDefault();
    
    const target = e.target;
    if (target.nodeName !== 'IMG') {
        return;
    }

    let urlImgOriginal = target.dataset.source;
    
   
    // const useLightBox = basicLightbox.create(`
    // <img src="${urlImgOriginal}" width="1280" height="auto">`);
    // useLightBox.show();

    // window.addEventListener('keydown', closeByEsc);
    
    // function closeByEsc(e) {
    //     if (e.code !== 'Escape') {
    //         return;
    //     }
    //     useLightBox.close();
        
    // }
    
}
window.removeEventListener('keydown', closeByEsc);
