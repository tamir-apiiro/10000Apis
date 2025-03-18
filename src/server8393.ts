
const express = require('express')
import {handler8393} from "./handler8393";
const app = express()
app.get('/8393', handler8393)
app.listen(3000, () => {})
        