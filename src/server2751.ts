
const express = require('express')
import {handler2751} from "./handler2751";
const app = express()
app.get('/2751', handler2751)
app.listen(3000, () => {})
        