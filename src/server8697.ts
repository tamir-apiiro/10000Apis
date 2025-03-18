
const express = require('express')
import {handler8697} from "./handler8697";
const app = express()
app.get('/8697', handler8697)
app.listen(3000, () => {})
        