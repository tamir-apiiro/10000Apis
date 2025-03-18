
const express = require('express')
import {handler8914} from "./handler8914";
const app = express()
app.get('/8914', handler8914)
app.listen(3000, () => {})
        