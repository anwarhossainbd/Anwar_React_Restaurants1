import React, {Component} from 'react';
import Productbox from "./Productbox";
import Image1 from "../images/s1.png";
import Image2 from "../images/s2.png"


class Products extends Component {
    render() {
        return (
            <div id='products'>
                <h1>CHOOSE & ENJOY</h1>
                <p>All classic children’s books are works of philosophy in one sense or another. A grown-up novel may make all its points with action and emotion</p>
                <div className='a-container'>
                    <Productbox image={Image1} title="Beef Burger" />
                    <Productbox image={Image2} title="Chicken Burger" />
                    <Productbox image={Image1} title="Beef Burger" />

                </div>
            </div>
        );
    }
}

export default Products;