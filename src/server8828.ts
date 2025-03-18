
const express = require('express')
import {handler8828} from "./handler8828";
const app = express()
app.get('/8828', handler8828)
app.listen(3000, () => {})
        