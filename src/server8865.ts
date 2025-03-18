
const express = require('express')
import {handler8865} from "./handler8865";
const app = express()
app.get('/8865', handler8865)
app.listen(3000, () => {})
        