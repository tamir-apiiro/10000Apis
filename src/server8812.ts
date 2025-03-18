
const express = require('express')
import {handler8812} from "./handler8812";
const app = express()
app.get('/8812', handler8812)
app.listen(3000, () => {})
        