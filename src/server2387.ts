
const express = require('express')
import {handler2387} from "./handler2387";
const app = express()
app.get('/2387', handler2387)
app.listen(3000, () => {})
        