
const express = require('express')
import {handler7504} from "./handler7504";
const app = express()
app.get('/7504', handler7504)
app.listen(3000, () => {})
        