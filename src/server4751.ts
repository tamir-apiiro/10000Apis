
const express = require('express')
import {handler4751} from "./handler4751";
const app = express()
app.get('/4751', handler4751)
app.listen(3000, () => {})
        