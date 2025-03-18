
const express = require('express')
import {handler2515} from "./handler2515";
const app = express()
app.get('/2515', handler2515)
app.listen(3000, () => {})
        