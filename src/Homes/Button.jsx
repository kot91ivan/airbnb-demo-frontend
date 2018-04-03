import React from "react";
import styled from "styled-components";

export class Button extends React.Component {
    handClick(){
        console.log('Успешно от консоль метод');
    }
    render(){
        return (<button onClick={this.handClick}>
            ONclick
        </button>)
    }
}

export default Button;