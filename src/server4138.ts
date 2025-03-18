
const express = require('express')
import {handler4138} from "./handler4138";
const app = express()
app.get('/4138', handler4138)
app.listen(3000, () => {})
        