
const express = require('express')
import {handler2462} from "./handler2462";
const app = express()
app.get('/2462', handler2462)
app.listen(3000, () => {})
        