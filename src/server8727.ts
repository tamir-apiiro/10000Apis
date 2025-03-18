
const express = require('express')
import {handler8727} from "./handler8727";
const app = express()
app.get('/8727', handler8727)
app.listen(3000, () => {})
        