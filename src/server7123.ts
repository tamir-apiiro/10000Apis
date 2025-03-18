
const express = require('express')
import {handler7123} from "./handler7123";
const app = express()
app.get('/7123', handler7123)
app.listen(3000, () => {})
        