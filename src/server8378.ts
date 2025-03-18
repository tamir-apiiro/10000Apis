
const express = require('express')
import {handler8378} from "./handler8378";
const app = express()
app.get('/8378', handler8378)
app.listen(3000, () => {})
        