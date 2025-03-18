
const express = require('express')
import {handler94} from "./handler94";
const app = express()
app.get('/94', handler94)
app.listen(3000, () => {})
        