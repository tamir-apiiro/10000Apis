
const express = require('express')
import {handler7532} from "./handler7532";
const app = express()
app.get('/7532', handler7532)
app.listen(3000, () => {})
        