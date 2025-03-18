
const express = require('express')
import {handler8425} from "./handler8425";
const app = express()
app.get('/8425', handler8425)
app.listen(3000, () => {})
        