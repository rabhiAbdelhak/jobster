import {css} from 'styled-components';


const tablette = (style) => {
    
    return css`@media (max-width: 992px) {
        ${style}
    }`
}

const mobile = (style) => {
    
    return css`@media (max-width: 450px) {
        ${style}
    }`
}

const mediumScreen = (style) => {
    return css`@media (max-width: 768px) and (min-width:450px) {
        ${style}
    }`
}

const largeScreen = (style) => {
    
    return css`@media (min-width: 992px) {
        ${style}
    }`
}
export {tablette, mobile, largeScreen, mediumScreen};