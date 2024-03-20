import Drag from './drag.js';

export default class Note extends Drag {
    constructor() {
        super();
        consol.log('Ciao dal costruttore della classe note...');
    }
}
