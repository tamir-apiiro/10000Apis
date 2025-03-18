
const express = require('express')
import {handler8427} from "./handler8427";
const app = express()
app.get('/8427', handler8427)
app.listen(3000, () => {})
        