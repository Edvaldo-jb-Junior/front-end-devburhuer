import PropTypes from "prop-types";
import {ContainerButton} from "./styles";

export function Button ({ children, theme, ...props}){
    
    return <ContainerButton {...props} theme={theme}>{children}</ContainerButton>
}

Button.propTypes = {
    children: PropTypes.string,
    //theme: PropTypes.oneOf(["primary", "secondary"]),
};

