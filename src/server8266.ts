
const express = require('express')
import {handler8266} from "./handler8266";
const app = express()
app.get('/8266', handler8266)
app.listen(3000, () => {})
        