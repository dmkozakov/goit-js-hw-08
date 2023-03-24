import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const refs = {
  galleryBox: document.querySelector('.gallery'),
};

const galleryMarkup = makeGalleryMarkup(galleryItems);

refs.galleryBox.innerHTML = galleryMarkup;

var lightbox = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt',
  close: false,
  showCounter: false,
});

function makeGalleryItemMarkup({ preview, original, description }) {
  return `
    <a class="gallery__item" href="${original}">
      <img loading="lazy" class="gallery__image lazyload" data-src="${preview}" alt="${description}"/>
    </a>`;
}

function makeGalleryMarkup(items) {
  return items.map(item => makeGalleryItemMarkup(item)).join('');
}

if ('loading' in HTMLImageElement.prototype) {
  const lazyImages = document.querySelectorAll('img[loading="lazy"]');

  lazyImages.forEach(img => {
    img.src = img.dataset.src;
  });
} else {
  const script = document.createElement('script');

  script.src =
    'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
  script.integrity =
    'sha512-q583ppKrCRc7N5O0n2nzUiJ+suUv7Et1JGels4bXOaMFQcamPk9HjdUknZuuFjBNs7tsMuadge5k9RzdmO+1GQ==';
  script.crossorigin = 'anonymous';
  script.referrerpolicy = 'no-referrer';

  document.body.appendChild(script);
}
