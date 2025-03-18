
const express = require('express')
import {handler8146} from "./handler8146";
const app = express()
app.get('/8146', handler8146)
app.listen(3000, () => {})
        