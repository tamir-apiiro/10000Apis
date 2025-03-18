
const express = require('express')
import {handler8927} from "./handler8927";
const app = express()
app.get('/8927', handler8927)
app.listen(3000, () => {})
        