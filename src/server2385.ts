
const express = require('express')
import {handler2385} from "./handler2385";
const app = express()
app.get('/2385', handler2385)
app.listen(3000, () => {})
        