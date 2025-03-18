
const express = require('express')
import {handler8840} from "./handler8840";
const app = express()
app.get('/8840', handler8840)
app.listen(3000, () => {})
        