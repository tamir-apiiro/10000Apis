
const express = require('express')
import {handler2144} from "./handler2144";
const app = express()
app.get('/2144', handler2144)
app.listen(3000, () => {})
        