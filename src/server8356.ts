
const express = require('express')
import {handler8356} from "./handler8356";
const app = express()
app.get('/8356', handler8356)
app.listen(3000, () => {})
        