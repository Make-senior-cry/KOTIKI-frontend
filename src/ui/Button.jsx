const Button = (props) => (<button onClick={props.onClick} type="button" className={`btn btn-${props.variant ? props.variant : 'primary'}`}>{props.children}</button>);

export default Button;