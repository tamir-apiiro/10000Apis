
const express = require('express')
import {handler8163} from "./handler8163";
const app = express()
app.get('/8163', handler8163)
app.listen(3000, () => {})
        