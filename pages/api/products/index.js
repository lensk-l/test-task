import {products} from "../../../data/data";export default function handler(req, res) {    if (req.method === 'GET') {        if (req.query) {            const {amount, category} = req.query;            const getFiltered = (product) => {                if (category && product.category !== category) {                    return false;                }                if (Number(amount) && product.amount > Number(amount)) {                    return false;                }                return true;            };            return res.status(200).json(products.filter(getFiltered))        }        res.status(200).json(products)    }    if (req.method === 'POST') {        const body = req.body        const newProduct = {            id: Date.now(),            category: body.category,            title: body.title,            amount: body.amount,            action: 'Міксер у подарунок',            tag: 'Лідер з продажу',            img: "https://e7.pngegg.com/pngimages/305/107/png-clipart-lg-electronics-led-backlit-lcd-computer-monitors-home-appliance-lg-text-trademark.png",            advantages: [                'Безкоштовна доставка',                'Є можливість кредитування',                'Гарантія 3 роки'            ]        }        products.push(newProduct);        res.status(201).json(products)    }}