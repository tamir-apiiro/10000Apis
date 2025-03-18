
const express = require('express')
import {handler8905} from "./handler8905";
const app = express()
app.get('/8905', handler8905)
app.listen(3000, () => {})
        