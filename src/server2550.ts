
const express = require('express')
import {handler2550} from "./handler2550";
const app = express()
app.get('/2550', handler2550)
app.listen(3000, () => {})
        