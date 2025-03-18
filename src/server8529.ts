
const express = require('express')
import {handler8529} from "./handler8529";
const app = express()
app.get('/8529', handler8529)
app.listen(3000, () => {})
        