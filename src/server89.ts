
const express = require('express')
import {handler89} from "./handler89";
const app = express()
app.get('/89', handler89)
app.listen(3000, () => {})
        