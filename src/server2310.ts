
const express = require('express')
import {handler2310} from "./handler2310";
const app = express()
app.get('/2310', handler2310)
app.listen(3000, () => {})
        