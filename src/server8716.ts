
const express = require('express')
import {handler8716} from "./handler8716";
const app = express()
app.get('/8716', handler8716)
app.listen(3000, () => {})
        