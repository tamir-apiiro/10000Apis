
const express = require('express')
import {handler2675} from "./handler2675";
const app = express()
app.get('/2675', handler2675)
app.listen(3000, () => {})
        