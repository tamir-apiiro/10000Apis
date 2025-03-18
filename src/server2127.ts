
const express = require('express')
import {handler2127} from "./handler2127";
const app = express()
app.get('/2127', handler2127)
app.listen(3000, () => {})
        