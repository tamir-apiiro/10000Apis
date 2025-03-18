
const express = require('express')
import {handler8030} from "./handler8030";
const app = express()
app.get('/8030', handler8030)
app.listen(3000, () => {})
        