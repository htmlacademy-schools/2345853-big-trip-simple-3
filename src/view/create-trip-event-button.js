import AbstractView from '../framework/view/abstract-view.js';
//если из-за этого у меня не работало все это, то это конечная

const createNewWaypointButtonTemplate = () =>
  '<button class="trip-main__event-add-btn  btn  btn--big  btn--yellow" type="button">New event</button>';

export default class CreateTripEventButton extends AbstractView {
  #handleClick;

  constructor({onClick}) {
    super();
    this.#handleClick = onClick;
    this.element.addEventListener('click', this.#clickHandler);
  }

  get template() {
    return createNewWaypointButtonTemplate();
  }

  #clickHandler = (evt) => {
    evt.preventDefault();
    this.#handleClick();
  };
}
