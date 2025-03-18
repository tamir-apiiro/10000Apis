
const express = require('express')
import {handler2289} from "./handler2289";
const app = express()
app.get('/2289', handler2289)
app.listen(3000, () => {})
        