
const express = require('express')
import {handler8403} from "./handler8403";
const app = express()
app.get('/8403', handler8403)
app.listen(3000, () => {})
        