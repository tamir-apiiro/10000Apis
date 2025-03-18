
const express = require('express')
import {handler2342} from "./handler2342";
const app = express()
app.get('/2342', handler2342)
app.listen(3000, () => {})
        