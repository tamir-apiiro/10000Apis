
const express = require('express')
import {handler8361} from "./handler8361";
const app = express()
app.get('/8361', handler8361)
app.listen(3000, () => {})
        