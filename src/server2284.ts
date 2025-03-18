
const express = require('express')
import {handler2284} from "./handler2284";
const app = express()
app.get('/2284', handler2284)
app.listen(3000, () => {})
        