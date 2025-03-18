
const express = require('express')
import {handler2202} from "./handler2202";
const app = express()
app.get('/2202', handler2202)
app.listen(3000, () => {})
        