
const express = require('express')
import {handler8907} from "./handler8907";
const app = express()
app.get('/8907', handler8907)
app.listen(3000, () => {})
        