
const express = require('express')
import {handler8694} from "./handler8694";
const app = express()
app.get('/8694', handler8694)
app.listen(3000, () => {})
        