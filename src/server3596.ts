
const express = require('express')
import {handler3596} from "./handler3596";
const app = express()
app.get('/3596', handler3596)
app.listen(3000, () => {})
        