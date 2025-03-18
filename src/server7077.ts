
const express = require('express')
import {handler7077} from "./handler7077";
const app = express()
app.get('/7077', handler7077)
app.listen(3000, () => {})
        