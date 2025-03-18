
const express = require('express')
import {handler7354} from "./handler7354";
const app = express()
app.get('/7354', handler7354)
app.listen(3000, () => {})
        