
const express = require('express')
import {handler7571} from "./handler7571";
const app = express()
app.get('/7571', handler7571)
app.listen(3000, () => {})
        