import modals from './modules/modals';
import sliders from './modules/sliders';
import forms from './modules/forms';
import mask from './modules/mask';
import checkTextInputs from './modules/checkTextInputs';
import showMoreStyles from './modules/showMoreStyles';
import serverShowMoreStyles from './modules/serverShowMoreStyles';
import calc from './modules/calc';
import pictureSize from './modules/pictureSize';
import accordion from './modules/accordion';
import burger from './modules/burger';
import scrolling from './modules/scrolling';
import drop from './modules/drop';

window.addEventListener( 'DOMContentLoaded', () => {
    'use strict';

    modals();

    sliders('.feedback-slider-item', 'horisontal', '.main-prev-btn', '.main-next-btn');
    sliders('.main-slider-item', 'vertical');

    forms();
    mask('[name="phone"]');

    checkTextInputs('[name="name"]');
    checkTextInputs('[name="message"]');

    //showMoreStyles('.button-styles', '.styles-2');

    serverShowMoreStyles('.button-styles', '#styles .row');

    calc('#size', '#material', '#options', '.promocode', '.calc-price');

    pictureSize('.sizes-block');

    accordion('.accordion-heading');

    burger('.burger-menu', '.burger');

    scrolling('.pageup');

    drop();
})