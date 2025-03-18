
const express = require('express')
import {handler2576} from "./handler2576";
const app = express()
app.get('/2576', handler2576)
app.listen(3000, () => {})
        