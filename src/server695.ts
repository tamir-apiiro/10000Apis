
const express = require('express')
import {handler695} from "./handler695";
const app = express()
app.get('/695', handler695)
app.listen(3000, () => {})
        