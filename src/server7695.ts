
const express = require('express')
import {handler7695} from "./handler7695";
const app = express()
app.get('/7695', handler7695)
app.listen(3000, () => {})
        