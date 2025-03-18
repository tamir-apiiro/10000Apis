
const express = require('express')
import {handler8885} from "./handler8885";
const app = express()
app.get('/8885', handler8885)
app.listen(3000, () => {})
        