
const express = require('express')
import {handler2490} from "./handler2490";
const app = express()
app.get('/2490', handler2490)
app.listen(3000, () => {})
        