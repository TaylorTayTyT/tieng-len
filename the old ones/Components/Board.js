import { Component } from "react";

class Board extends Component{


    draw(props) {
        console.log(this.props.ctx);
        if (this.props.ctx.getContext) {
            var canv = this.props.ctx.getContext('2d');

            canv.fillRect(25, 25, 100, 100);
            canv.clearRect(45, 45, 60, 60);
            canv.strokeRect(50, 50, 50, 50);
        }
    }


    render() {
        this.draw();
        return <div></div>;
         /*
        return (
            <div class="board">
                <canvas id="table" width={500} height={500}>

                </canvas>
            </div>
        )*/

    };

}

export default Board