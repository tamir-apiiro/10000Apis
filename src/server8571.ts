
const express = require('express')
import {handler8571} from "./handler8571";
const app = express()
app.get('/8571', handler8571)
app.listen(3000, () => {})
        