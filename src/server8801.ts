
const express = require('express')
import {handler8801} from "./handler8801";
const app = express()
app.get('/8801', handler8801)
app.listen(3000, () => {})
        