
const express = require('express')
import {handler8360} from "./handler8360";
const app = express()
app.get('/8360', handler8360)
app.listen(3000, () => {})
        