
const express = require('express')
import {handler8412} from "./handler8412";
const app = express()
app.get('/8412', handler8412)
app.listen(3000, () => {})
        