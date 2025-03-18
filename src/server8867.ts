
const express = require('express')
import {handler8867} from "./handler8867";
const app = express()
app.get('/8867', handler8867)
app.listen(3000, () => {})
        