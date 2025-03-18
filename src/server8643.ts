
const express = require('express')
import {handler8643} from "./handler8643";
const app = express()
app.get('/8643', handler8643)
app.listen(3000, () => {})
        