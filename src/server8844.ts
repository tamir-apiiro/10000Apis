
const express = require('express')
import {handler8844} from "./handler8844";
const app = express()
app.get('/8844', handler8844)
app.listen(3000, () => {})
        