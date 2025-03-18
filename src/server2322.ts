
const express = require('express')
import {handler2322} from "./handler2322";
const app = express()
app.get('/2322', handler2322)
app.listen(3000, () => {})
        