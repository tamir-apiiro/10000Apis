
const express = require('express')
import {handler8081} from "./handler8081";
const app = express()
app.get('/8081', handler8081)
app.listen(3000, () => {})
        