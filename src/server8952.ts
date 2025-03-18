
const express = require('express')
import {handler8952} from "./handler8952";
const app = express()
app.get('/8952', handler8952)
app.listen(3000, () => {})
        