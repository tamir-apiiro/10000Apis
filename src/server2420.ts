
const express = require('express')
import {handler2420} from "./handler2420";
const app = express()
app.get('/2420', handler2420)
app.listen(3000, () => {})
        