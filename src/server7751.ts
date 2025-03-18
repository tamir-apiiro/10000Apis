
const express = require('express')
import {handler7751} from "./handler7751";
const app = express()
app.get('/7751', handler7751)
app.listen(3000, () => {})
        