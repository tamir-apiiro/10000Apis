
const express = require('express')
import {handler2964} from "./handler2964";
const app = express()
app.get('/2964', handler2964)
app.listen(3000, () => {})
        