
const express = require('express')
import {handler8999} from "./handler8999";
const app = express()
app.get('/8999', handler8999)
app.listen(3000, () => {})
        