
const express = require('express')
import {handler8388} from "./handler8388";
const app = express()
app.get('/8388', handler8388)
app.listen(3000, () => {})
        