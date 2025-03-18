
const express = require('express')
import {handler2790} from "./handler2790";
const app = express()
app.get('/2790', handler2790)
app.listen(3000, () => {})
        