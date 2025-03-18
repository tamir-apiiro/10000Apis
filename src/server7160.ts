
const express = require('express')
import {handler7160} from "./handler7160";
const app = express()
app.get('/7160', handler7160)
app.listen(3000, () => {})
        