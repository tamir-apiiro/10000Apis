
const express = require('express')
import {handler2293} from "./handler2293";
const app = express()
app.get('/2293', handler2293)
app.listen(3000, () => {})
        