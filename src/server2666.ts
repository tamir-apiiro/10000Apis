
const express = require('express')
import {handler2666} from "./handler2666";
const app = express()
app.get('/2666', handler2666)
app.listen(3000, () => {})
        