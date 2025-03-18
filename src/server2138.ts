
const express = require('express')
import {handler2138} from "./handler2138";
const app = express()
app.get('/2138', handler2138)
app.listen(3000, () => {})
        