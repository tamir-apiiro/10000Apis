
const express = require('express')
import {handler2598} from "./handler2598";
const app = express()
app.get('/2598', handler2598)
app.listen(3000, () => {})
        