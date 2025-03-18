
const express = require('express')
import {handler7596} from "./handler7596";
const app = express()
app.get('/7596', handler7596)
app.listen(3000, () => {})
        