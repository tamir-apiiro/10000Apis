
const express = require('express')
import {handler2253} from "./handler2253";
const app = express()
app.get('/2253', handler2253)
app.listen(3000, () => {})
        