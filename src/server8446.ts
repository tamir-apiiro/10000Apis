
const express = require('express')
import {handler8446} from "./handler8446";
const app = express()
app.get('/8446', handler8446)
app.listen(3000, () => {})
        