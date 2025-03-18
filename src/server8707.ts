
const express = require('express')
import {handler8707} from "./handler8707";
const app = express()
app.get('/8707', handler8707)
app.listen(3000, () => {})
        