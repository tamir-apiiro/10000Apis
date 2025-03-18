
const express = require('express')
import {handler2366} from "./handler2366";
const app = express()
app.get('/2366', handler2366)
app.listen(3000, () => {})
        