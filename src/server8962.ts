
const express = require('express')
import {handler8962} from "./handler8962";
const app = express()
app.get('/8962', handler8962)
app.listen(3000, () => {})
        