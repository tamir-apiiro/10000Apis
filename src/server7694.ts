
const express = require('express')
import {handler7694} from "./handler7694";
const app = express()
app.get('/7694', handler7694)
app.listen(3000, () => {})
        