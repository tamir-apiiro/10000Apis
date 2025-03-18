
const express = require('express')
import {handler8324} from "./handler8324";
const app = express()
app.get('/8324', handler8324)
app.listen(3000, () => {})
        