
const express = require('express')
import {handler8070} from "./handler8070";
const app = express()
app.get('/8070', handler8070)
app.listen(3000, () => {})
        