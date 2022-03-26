
import React, { Component } from 'react';
class Card extends Component {

    draw(props) {
        if (!this.props.ctx.getContext("2d")) {
            return;
        }
        let c = this.props.ctx.getContext("2d");
        c.beginPath();
        c.lineWidth = "6";
        c.strokeStyle = "black";
        c.clearRect(0, 0, this.props.ctx.width, this.props.ctx.height);
        c.strokeRect(400, 100, 175, 300); 
    }

    render() {
        this.draw();
        return <div></div>;
        /*return (
            <div class = "counter">
                <canvas id="myCanvas" width="200" height="300" style={{ border: "7px solid #000000" }}>
                </canvas>
                <h2 style = {{textAlign: 'center'}}>Taylor Nguyen</h2>
                <div class = "vertical-center">
                    <button onclick="myFunction()" className='button1'>play</button>
                </div>
            </div>
        );*/


    };
}

export default Card