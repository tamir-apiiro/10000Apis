
const express = require('express')
import {handler8521} from "./handler8521";
const app = express()
app.get('/8521', handler8521)
app.listen(3000, () => {})
        