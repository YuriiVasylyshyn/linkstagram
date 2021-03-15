import React from "react";
import styles from './input.module.scss';

type InputProps = { placeHolder: string };

class Input extends React.Component<InputProps> {

    body = <input className={styles.input} type='text' placeholder={this.props.placeHolder}></input>

    render() {
        return this.body;
    }

}


export default Input;