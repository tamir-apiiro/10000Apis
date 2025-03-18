
const express = require('express')
import {handler7217} from "./handler7217";
const app = express()
app.get('/7217', handler7217)
app.listen(3000, () => {})
        