
const express = require('express')
import {handler8987} from "./handler8987";
const app = express()
app.get('/8987', handler8987)
app.listen(3000, () => {})
        