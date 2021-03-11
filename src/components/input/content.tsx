import React from "react";
import styles from './input.module.scss';

type InputProps = { label: string };

class Input extends React.Component<InputProps> {


    body = <div>
        <label>
            {this.props.label}
            <input className={styles.input} type='text'></input>
        </label>
    </div>
    render() {
        return this.body;
    }

}


export default Input;