
const express = require('express')
import {handler427} from "./handler427";
const app = express()
app.get('/427', handler427)
app.listen(3000, () => {})
        