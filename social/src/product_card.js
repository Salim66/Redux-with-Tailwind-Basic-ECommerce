import shoe1 from './assets/images/products/shoe1.webp';
import shoe2 from './assets/images/products/shoe2.webp';
import shoe3 from './assets/images/products/shoe3.webp';
import shoe4 from './assets/images/products/shoe4.webp';

const product_card = [
    {
        id: 1,
        product_name: "Running Shoes For Men",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, magni?",
        sizes: {
            S: "S",
            M: "M",
            L: "L",
            XL: "XL"
        },
        regualr_price: 30,
        sale_price: 22.99,
        currency: "$",
        photo: shoe1
    },
    {
        id: 2,
        product_name: "ROYCE-2 Running Shoes",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, magni?",
        sizes: {
            S: "S",
            M: "M",
            L: "L",
            XL: "XL"
        },
        regualr_price: 600,
        sale_price: 500,
        currency: "$",
        photo: shoe2
    },
    {
        id: 3,
        product_name: "HURRICANE Running Shoe",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, magni?",
        sizes: {
            S: "S",
            M: "M",
            L: "L",
            XL: "XL"
        },
        regualr_price: 50,
        sale_price: null,
        currency: "$",
        photo: shoe3
    },
    {
        id: 4,
        product_name: "Stylish Sport Running Shoes",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, magni?",
        sizes: {
            S: "S",
            M: "M",
            L: "L",
            XL: "XL"
        },
        regualr_price: 30,
        sale_price: 25.99,
        currency: "$",
        photo: shoe4
    },
    
]

export default product_card;