
const express = require('express')
import {handler8502} from "./handler8502";
const app = express()
app.get('/8502', handler8502)
app.listen(3000, () => {})
        