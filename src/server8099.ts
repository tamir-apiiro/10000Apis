
const express = require('express')
import {handler8099} from "./handler8099";
const app = express()
app.get('/8099', handler8099)
app.listen(3000, () => {})
        