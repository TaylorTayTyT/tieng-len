
import React, { Component } from 'react';
class Card extends Component {

    draw(props) {
        if (!this.props.ctx.getContext("2d")) {
            return;
        }
        let c = this.props.ctx.getContext("2d");
        let t = this.props.ctx.getContext("2d");
        c.beginPath();
        c.lineWidth = "6";
        c.strokeStyle = "black";

        t.beginPath();
        t.lineWidth = "6";
        t.strokeStyle = "green";

        c.clearRect(0, 0, this.props.ctx.width, this.props.ctx.height);
        c.strokeRect(400, 100, 175, 300);
        c.fillStyle = "black";
        c.fillRect(400, 100, 175, 300);

        t.arc(this.props.ctx.width / 2, this.props.ctx.height / 2, 200, 0, 2 * Math.PI, true);
        t.fillStyle = "red";
        t.fill();
        t.stroke();
    }

    render() {
        this.draw();
        return (
            <div>
                
            </div>
            );
    };
}

export default Card