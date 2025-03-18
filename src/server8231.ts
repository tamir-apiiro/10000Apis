
const express = require('express')
import {handler8231} from "./handler8231";
const app = express()
app.get('/8231', handler8231)
app.listen(3000, () => {})
        