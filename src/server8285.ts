
const express = require('express')
import {handler8285} from "./handler8285";
const app = express()
app.get('/8285', handler8285)
app.listen(3000, () => {})
        