
const express = require('express')
import {handler2029} from "./handler2029";
const app = express()
app.get('/2029', handler2029)
app.listen(3000, () => {})
        