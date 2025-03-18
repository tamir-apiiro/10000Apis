
const express = require('express')
import {handler8080} from "./handler8080";
const app = express()
app.get('/8080', handler8080)
app.listen(3000, () => {})
        