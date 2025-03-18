
const express = require('express')
import {handler2156} from "./handler2156";
const app = express()
app.get('/2156', handler2156)
app.listen(3000, () => {})
        