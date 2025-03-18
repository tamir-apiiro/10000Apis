
const express = require('express')
import {handler596} from "./handler596";
const app = express()
app.get('/596', handler596)
app.listen(3000, () => {})
        