
const express = require('express')
import {handler7427} from "./handler7427";
const app = express()
app.get('/7427', handler7427)
app.listen(3000, () => {})
        