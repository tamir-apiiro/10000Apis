
const express = require('express')
import {handler2250} from "./handler2250";
const app = express()
app.get('/2250', handler2250)
app.listen(3000, () => {})
        