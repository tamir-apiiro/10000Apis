
const express = require('express')
import {handler2980} from "./handler2980";
const app = express()
app.get('/2980', handler2980)
app.listen(3000, () => {})
        