
const express = require('express')
import {handler8627} from "./handler8627";
const app = express()
app.get('/8627', handler8627)
app.listen(3000, () => {})
        