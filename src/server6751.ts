
const express = require('express')
import {handler6751} from "./handler6751";
const app = express()
app.get('/6751', handler6751)
app.listen(3000, () => {})
        