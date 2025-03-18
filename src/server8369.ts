
const express = require('express')
import {handler8369} from "./handler8369";
const app = express()
app.get('/8369', handler8369)
app.listen(3000, () => {})
        