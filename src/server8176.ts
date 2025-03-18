
const express = require('express')
import {handler8176} from "./handler8176";
const app = express()
app.get('/8176', handler8176)
app.listen(3000, () => {})
        