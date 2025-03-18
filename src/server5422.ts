
const express = require('express')
import {handler5422} from "./handler5422";
const app = express()
app.get('/5422', handler5422)
app.listen(3000, () => {})
        