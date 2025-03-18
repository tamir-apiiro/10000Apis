
const express = require('express')
import {handler8077} from "./handler8077";
const app = express()
app.get('/8077', handler8077)
app.listen(3000, () => {})
        