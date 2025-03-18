
const express = require('express')
import {handler7201} from "./handler7201";
const app = express()
app.get('/7201', handler7201)
app.listen(3000, () => {})
        