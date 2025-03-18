
const express = require('express')
import {handler2443} from "./handler2443";
const app = express()
app.get('/2443', handler2443)
app.listen(3000, () => {})
        