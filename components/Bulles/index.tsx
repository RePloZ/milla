import React, {Component} from 'react';

interface image {
    style
}

interface bulleProps {
    image
}

export default class Bulle extends Component {
    constructor(props) {
        super(props);
    }

    render = () => {
        const {bulle, image} = this.props;


        return (<div>
                <img className={styles[image.style]} src={image.src}  alt={image.alt} srcSet={image.srcSet} />
                <div className={styles[bulle.style]} >
                    {this.props.children}
                </div>        
            </div>)
        }
}