
const express = require('express')
import {handler2242} from "./handler2242";
const app = express()
app.get('/2242', handler2242)
app.listen(3000, () => {})
        