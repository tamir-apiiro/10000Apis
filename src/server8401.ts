
const express = require('express')
import {handler8401} from "./handler8401";
const app = express()
app.get('/8401', handler8401)
app.listen(3000, () => {})
        