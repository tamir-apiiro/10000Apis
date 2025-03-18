
const express = require('express')
import {handler8} from "./handler8";
const app = express()
app.get('/8', handler8)
app.listen(3000, () => {})
        