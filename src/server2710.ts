
const express = require('express')
import {handler2710} from "./handler2710";
const app = express()
app.get('/2710', handler2710)
app.listen(3000, () => {})
        