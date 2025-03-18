
const express = require('express')
import {handler8938} from "./handler8938";
const app = express()
app.get('/8938', handler8938)
app.listen(3000, () => {})
        