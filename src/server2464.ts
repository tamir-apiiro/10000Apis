
const express = require('express')
import {handler2464} from "./handler2464";
const app = express()
app.get('/2464', handler2464)
app.listen(3000, () => {})
        