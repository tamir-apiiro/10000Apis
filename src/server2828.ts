
const express = require('express')
import {handler2828} from "./handler2828";
const app = express()
app.get('/2828', handler2828)
app.listen(3000, () => {})
        