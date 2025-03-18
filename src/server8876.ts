
const express = require('express')
import {handler8876} from "./handler8876";
const app = express()
app.get('/8876', handler8876)
app.listen(3000, () => {})
        