
const express = require('express')
import {handler2774} from "./handler2774";
const app = express()
app.get('/2774', handler2774)
app.listen(3000, () => {})
        