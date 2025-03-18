
const express = require('express')
import {handler2860} from "./handler2860";
const app = express()
app.get('/2860', handler2860)
app.listen(3000, () => {})
        