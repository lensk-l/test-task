import {products} from '../../store/data'export default function handler(req, res) {    // Get data from your database    res.status(200).json(products)}