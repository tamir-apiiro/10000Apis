
const express = require('express')
import {handler8150} from "./handler8150";
const app = express()
app.get('/8150', handler8150)
app.listen(3000, () => {})
        