
const express = require('express')
import {handler8815} from "./handler8815";
const app = express()
app.get('/8815', handler8815)
app.listen(3000, () => {})
        