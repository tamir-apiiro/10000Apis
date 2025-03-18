
const express = require('express')
import {handler2026} from "./handler2026";
const app = express()
app.get('/2026', handler2026)
app.listen(3000, () => {})
        