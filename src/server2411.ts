
const express = require('express')
import {handler2411} from "./handler2411";
const app = express()
app.get('/2411', handler2411)
app.listen(3000, () => {})
        