/** 
 * Each Carousel will cycle thru a given set of images on a timer
 * Carousels can be clicked upon to advance the image
 * @param {array} images - An array of image path/description objects
 *  *  * {string} image.description - used in the alt attribute
 *  *  * {string} image.path - relative path the the image file
 * @param {DOM element} element - the target img element from the DOM
 * @param {number} timeLimit - amount of time to wait to advance the image (in microseconds)
 */
class Carousel {
  constructor(images, element, timeLimit) {
    this.images = images;
    this.index = getRandomNumber(this.images.length);
    this.basePath = 'img/game-images/';

    this.element = element;
    element.addEventListener('click', this.next.bind(this));

    // bind the document/interval event handler to this instance
    this.interval = setInterval(this.next.bind(this), timeLimit);
    // set the first image
    this.setImage();
  }

  handleClick() {
    // reset interval
    clearInterval(this.interval);
    this.interval = setInterval(this.next.bind(this), timeLimit);

    this.next();
  }

  next() {
    this.index++;
    if (this.index >= this.images.length) {
      this.index = 0;
    }

    this.setImage();
  }

  setImage() {
    // update image on DOM
    this.element.setAttribute(
      'src',
      this.basePath + this.images[this.index].path
    );
    this.element.setAttribute('alt', this.images[this.index].description);
  }
}
