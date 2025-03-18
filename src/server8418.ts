
const express = require('express')
import {handler8418} from "./handler8418";
const app = express()
app.get('/8418', handler8418)
app.listen(3000, () => {})
        