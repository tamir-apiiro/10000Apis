
const express = require('express')
import {handler15} from "./handler15";
const app = express()
app.get('/15', handler15)
app.listen(3000, () => {})
        