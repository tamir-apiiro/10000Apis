
const express = require('express')
import {handler2158} from "./handler2158";
const app = express()
app.get('/2158', handler2158)
app.listen(3000, () => {})
        