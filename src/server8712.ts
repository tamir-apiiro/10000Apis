
const express = require('express')
import {handler8712} from "./handler8712";
const app = express()
app.get('/8712', handler8712)
app.listen(3000, () => {})
        