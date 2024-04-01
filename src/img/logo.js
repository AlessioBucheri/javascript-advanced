import logoImg from './logo.svg';
import '../css/style.css';

function logo() {
    const logoDomImage = new Image();
    logoDomImage.src = logoImg;
    logoDomImage.className.add('logo');
    return logoDomImage;
}

export default logo;