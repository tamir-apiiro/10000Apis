
const express = require('express')
import {handler8025} from "./handler8025";
const app = express()
app.get('/8025', handler8025)
app.listen(3000, () => {})
        