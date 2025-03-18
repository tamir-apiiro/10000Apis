
const express = require('express')
import {handler643} from "./handler643";
const app = express()
app.get('/643', handler643)
app.listen(3000, () => {})
        