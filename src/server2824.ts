
const express = require('express')
import {handler2824} from "./handler2824";
const app = express()
app.get('/2824', handler2824)
app.listen(3000, () => {})
        