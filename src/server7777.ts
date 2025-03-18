
const express = require('express')
import {handler7777} from "./handler7777";
const app = express()
app.get('/7777', handler7777)
app.listen(3000, () => {})
        