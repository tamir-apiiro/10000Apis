
const express = require('express')
import {handler8558} from "./handler8558";
const app = express()
app.get('/8558', handler8558)
app.listen(3000, () => {})
        