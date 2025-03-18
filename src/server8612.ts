
const express = require('express')
import {handler8612} from "./handler8612";
const app = express()
app.get('/8612', handler8612)
app.listen(3000, () => {})
        