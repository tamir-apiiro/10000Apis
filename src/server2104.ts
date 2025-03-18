
const express = require('express')
import {handler2104} from "./handler2104";
const app = express()
app.get('/2104', handler2104)
app.listen(3000, () => {})
        