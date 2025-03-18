
const express = require('express')
import {handler123} from "./handler123";
const app = express()
app.get('/123', handler123)
app.listen(3000, () => {})
        