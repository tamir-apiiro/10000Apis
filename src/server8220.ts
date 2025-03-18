
const express = require('express')
import {handler8220} from "./handler8220";
const app = express()
app.get('/8220', handler8220)
app.listen(3000, () => {})
        