
const express = require('express')
import {handler2025} from "./handler2025";
const app = express()
app.get('/2025', handler2025)
app.listen(3000, () => {})
        