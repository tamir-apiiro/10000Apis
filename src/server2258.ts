
const express = require('express')
import {handler2258} from "./handler2258";
const app = express()
app.get('/2258', handler2258)
app.listen(3000, () => {})
        