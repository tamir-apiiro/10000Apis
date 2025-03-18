
const express = require('express')
import {handler8555} from "./handler8555";
const app = express()
app.get('/8555', handler8555)
app.listen(3000, () => {})
        