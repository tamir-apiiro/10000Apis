
const express = require('express')
import {handler8986} from "./handler8986";
const app = express()
app.get('/8986', handler8986)
app.listen(3000, () => {})
        