
const express = require('express')
import {handler8270} from "./handler8270";
const app = express()
app.get('/8270', handler8270)
app.listen(3000, () => {})
        