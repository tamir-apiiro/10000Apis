
const express = require('express')
import {handler2832} from "./handler2832";
const app = express()
app.get('/2832', handler2832)
app.listen(3000, () => {})
        