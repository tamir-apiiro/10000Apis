
const express = require('express')
import {handler8600} from "./handler8600";
const app = express()
app.get('/8600', handler8600)
app.listen(3000, () => {})
        