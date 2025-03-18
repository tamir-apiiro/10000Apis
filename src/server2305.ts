
const express = require('express')
import {handler2305} from "./handler2305";
const app = express()
app.get('/2305', handler2305)
app.listen(3000, () => {})
        