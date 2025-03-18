
const express = require('express')
import {handler8695} from "./handler8695";
const app = express()
app.get('/8695', handler8695)
app.listen(3000, () => {})
        