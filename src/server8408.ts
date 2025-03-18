
const express = require('express')
import {handler8408} from "./handler8408";
const app = express()
app.get('/8408', handler8408)
app.listen(3000, () => {})
        