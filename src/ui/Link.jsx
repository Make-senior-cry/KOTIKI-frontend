import { Link as ReactRouterLink } from "react-router-dom";
import cn from "classnames";
export default function Link(props){
    return(
        <ReactRouterLink to={props.href} className={cn('link-primary', props.disableUnderline && 'text-decoration-none')} >{props.children}</ReactRouterLink>
    );
}