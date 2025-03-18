
const express = require('express')
import {handler8783} from "./handler8783";
const app = express()
app.get('/8783', handler8783)
app.listen(3000, () => {})
        