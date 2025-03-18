
const express = require('express')
import {handler8022} from "./handler8022";
const app = express()
app.get('/8022', handler8022)
app.listen(3000, () => {})
        