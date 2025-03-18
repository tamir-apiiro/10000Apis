
const express = require('express')
import {handler8601} from "./handler8601";
const app = express()
app.get('/8601', handler8601)
app.listen(3000, () => {})
        