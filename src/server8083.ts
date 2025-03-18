
const express = require('express')
import {handler8083} from "./handler8083";
const app = express()
app.get('/8083', handler8083)
app.listen(3000, () => {})
        