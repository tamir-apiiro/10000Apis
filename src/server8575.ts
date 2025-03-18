
const express = require('express')
import {handler8575} from "./handler8575";
const app = express()
app.get('/8575', handler8575)
app.listen(3000, () => {})
        