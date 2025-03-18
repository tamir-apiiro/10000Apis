
const express = require('express')
import {handler8586} from "./handler8586";
const app = express()
app.get('/8586', handler8586)
app.listen(3000, () => {})
        