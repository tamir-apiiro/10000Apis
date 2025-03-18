
const express = require('express')
import {handler2999} from "./handler2999";
const app = express()
app.get('/2999', handler2999)
app.listen(3000, () => {})
        