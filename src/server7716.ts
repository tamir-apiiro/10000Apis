
const express = require('express')
import {handler7716} from "./handler7716";
const app = express()
app.get('/7716', handler7716)
app.listen(3000, () => {})
        