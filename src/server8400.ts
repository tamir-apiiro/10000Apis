
const express = require('express')
import {handler8400} from "./handler8400";
const app = express()
app.get('/8400', handler8400)
app.listen(3000, () => {})
        