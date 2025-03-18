
const express = require('express')
import {handler751} from "./handler751";
const app = express()
app.get('/751', handler751)
app.listen(3000, () => {})
        