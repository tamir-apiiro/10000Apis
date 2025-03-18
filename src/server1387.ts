
const express = require('express')
import {handler1387} from "./handler1387";
const app = express()
app.get('/1387', handler1387)
app.listen(3000, () => {})
        