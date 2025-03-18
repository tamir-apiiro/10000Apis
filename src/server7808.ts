
const express = require('express')
import {handler7808} from "./handler7808";
const app = express()
app.get('/7808', handler7808)
app.listen(3000, () => {})
        