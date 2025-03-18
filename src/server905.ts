
const express = require('express')
import {handler905} from "./handler905";
const app = express()
app.get('/905', handler905)
app.listen(3000, () => {})
        