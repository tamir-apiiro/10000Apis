
const express = require('express')
import {handler8183} from "./handler8183";
const app = express()
app.get('/8183', handler8183)
app.listen(3000, () => {})
        