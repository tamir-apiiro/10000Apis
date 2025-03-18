
const express = require('express')
import {handler8377} from "./handler8377";
const app = express()
app.get('/8377', handler8377)
app.listen(3000, () => {})
        