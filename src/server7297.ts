
const express = require('express')
import {handler7297} from "./handler7297";
const app = express()
app.get('/7297', handler7297)
app.listen(3000, () => {})
        