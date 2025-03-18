
const express = require('express')
import {handler7249} from "./handler7249";
const app = express()
app.get('/7249', handler7249)
app.listen(3000, () => {})
        