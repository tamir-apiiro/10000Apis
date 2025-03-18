
const express = require('express')
import {handler2596} from "./handler2596";
const app = express()
app.get('/2596', handler2596)
app.listen(3000, () => {})
        