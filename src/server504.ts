
const express = require('express')
import {handler504} from "./handler504";
const app = express()
app.get('/504', handler504)
app.listen(3000, () => {})
        