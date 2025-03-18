
const express = require('express')
import {handler8804} from "./handler8804";
const app = express()
app.get('/8804', handler8804)
app.listen(3000, () => {})
        