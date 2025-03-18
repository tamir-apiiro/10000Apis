
const express = require('express')
import {handler8049} from "./handler8049";
const app = express()
app.get('/8049', handler8049)
app.listen(3000, () => {})
        