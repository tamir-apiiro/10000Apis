
const express = require('express')
import {handler8554} from "./handler8554";
const app = express()
app.get('/8554', handler8554)
app.listen(3000, () => {})
        