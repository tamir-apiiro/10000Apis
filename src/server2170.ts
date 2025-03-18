
const express = require('express')
import {handler2170} from "./handler2170";
const app = express()
app.get('/2170', handler2170)
app.listen(3000, () => {})
        