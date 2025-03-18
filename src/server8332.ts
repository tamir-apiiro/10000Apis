
const express = require('express')
import {handler8332} from "./handler8332";
const app = express()
app.get('/8332', handler8332)
app.listen(3000, () => {})
        