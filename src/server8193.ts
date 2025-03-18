
const express = require('express')
import {handler8193} from "./handler8193";
const app = express()
app.get('/8193', handler8193)
app.listen(3000, () => {})
        