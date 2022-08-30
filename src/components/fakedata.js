import mangga from '../assets/mango.svg';
import bubble from '../assets/bubble-tea-gelatin.svg';
import greencoco from '../assets/green-coconut.svg';
import product1 from "../assets/coffe.svg"
import product2 from "../assets/coffe2.svg"
import product3 from "../assets/coffe3.svg"
import product4 from "../assets/coffe4.svg"

export let dataProduct = [{
        id: 1,
        name: "Boba Milk Tea",
        price: 27000,
        image: product1,
        stock: 100,
    },
    {
        id: 2,
        name: "Boba Chocolate",
        price: 25000,
        image: product2,
        stock: 100,
    },
    {
        id: 3,
        name: "Boba Chocolate",
        price: 25000,
        image: product3,
        stock: 100,
    },
    {
        id: 4,
        name: "Boba Chocolate",
        price: 25000,
        image: product4,
        stock: 100,
    },
    
];

export let dataTopping = [{
        name: "Mango",
        image: mangga,
        price: 6000
    },
    {
        name: "Bubble Tea Gelatin",
        image: bubble,
        price: 5000
    },
    {
        name: "Green Coconut",
        image: greencoco,
        price: 4000
    },
];
export let dataIncome = [{
        id: "1",
        name: "Danu",
        address: "jakarta",
        postcode: "87653",
        income: 500000,
        status: "success"
    },
    {
        id: "2",
        name: "Nana",
        address: "Tangerang",
        postcode: "22345",
        income: 29000,
        status: "success"
    },
    {
        id: "3",
        name: "laksa",
        address: "Surabaya",
        postcode: "11123",
        income: 100000,
        status: "ontheway"
    },
    {
        id: "4",
        name: "Panji",
        address: "Semarang",
        postcode: "22555",
        income: 50000,
        status: "waiting"
    },
];

export let dataTransaction = [
    {
        id: 1,
        name: "Boba Milk Tea",
        price: 27000,
        image: product1,
        topping: 'mango boba, bill berry boba',
        qty: 1
    },
    {
        id: 2,
        name: "Ice Coffe Palm Sugar",
        price: 27000,
        image: product1,
        topping: 'mango boba, bill berry boba',
        qty: 1
    }
]