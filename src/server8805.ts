
const express = require('express')
import {handler8805} from "./handler8805";
const app = express()
app.get('/8805', handler8805)
app.listen(3000, () => {})
        