
const express = require('express')
import {handler2081} from "./handler2081";
const app = express()
app.get('/2081', handler2081)
app.listen(3000, () => {})
        