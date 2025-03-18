
const express = require('express')
import {handler2052} from "./handler2052";
const app = express()
app.get('/2052', handler2052)
app.listen(3000, () => {})
        