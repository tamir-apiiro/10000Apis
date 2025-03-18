
const express = require('express')
import {handler8572} from "./handler8572";
const app = express()
app.get('/8572', handler8572)
app.listen(3000, () => {})
        