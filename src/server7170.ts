
const express = require('express')
import {handler7170} from "./handler7170";
const app = express()
app.get('/7170', handler7170)
app.listen(3000, () => {})
        