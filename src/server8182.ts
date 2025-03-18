
const express = require('express')
import {handler8182} from "./handler8182";
const app = express()
app.get('/8182', handler8182)
app.listen(3000, () => {})
        