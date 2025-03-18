
const express = require('express')
import {handler3751} from "./handler3751";
const app = express()
app.get('/3751', handler3751)
app.listen(3000, () => {})
        