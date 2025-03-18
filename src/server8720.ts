
const express = require('express')
import {handler8720} from "./handler8720";
const app = express()
app.get('/8720', handler8720)
app.listen(3000, () => {})
        