import { Link as ReactRouterLink } from "react-router-dom";
export default function Link(props){
    return(
        <ReactRouterLink to={props.href} className={`link-primary ${props.disableUnderline ? 'text-decoration-none' : ''}`} >{props.children}</ReactRouterLink>
    );
}