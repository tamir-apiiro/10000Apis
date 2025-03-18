
const express = require('express')
import {handler8904} from "./handler8904";
const app = express()
app.get('/8904', handler8904)
app.listen(3000, () => {})
        