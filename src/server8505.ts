
const express = require('express')
import {handler8505} from "./handler8505";
const app = express()
app.get('/8505', handler8505)
app.listen(3000, () => {})
        