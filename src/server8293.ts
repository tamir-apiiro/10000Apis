
const express = require('express')
import {handler8293} from "./handler8293";
const app = express()
app.get('/8293', handler8293)
app.listen(3000, () => {})
        