
const express = require('express')
import {handler8921} from "./handler8921";
const app = express()
app.get('/8921', handler8921)
app.listen(3000, () => {})
        