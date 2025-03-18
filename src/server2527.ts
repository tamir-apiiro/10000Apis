
const express = require('express')
import {handler2527} from "./handler2527";
const app = express()
app.get('/2527', handler2527)
app.listen(3000, () => {})
        