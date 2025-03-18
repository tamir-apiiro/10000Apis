
const express = require('express')
import {handler8547} from "./handler8547";
const app = express()
app.get('/8547', handler8547)
app.listen(3000, () => {})
        