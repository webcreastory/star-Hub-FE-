import ReactDom from 'react-dom'

export const ModalPotal = ({children}) =>{
    const el = document.getElementById("modal");
    return ReactDom.createPortal(children, el);
};