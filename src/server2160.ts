
const express = require('express')
import {handler2160} from "./handler2160";
const app = express()
app.get('/2160', handler2160)
app.listen(3000, () => {})
        