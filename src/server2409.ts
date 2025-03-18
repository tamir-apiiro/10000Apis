
const express = require('express')
import {handler2409} from "./handler2409";
const app = express()
app.get('/2409', handler2409)
app.listen(3000, () => {})
        