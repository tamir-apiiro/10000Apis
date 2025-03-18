
const express = require('express')
import {handler8584} from "./handler8584";
const app = express()
app.get('/8584', handler8584)
app.listen(3000, () => {})
        