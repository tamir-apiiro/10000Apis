
const express = require('express')
import {handler2300} from "./handler2300";
const app = express()
app.get('/2300', handler2300)
app.listen(3000, () => {})
        