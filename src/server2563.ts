
const express = require('express')
import {handler2563} from "./handler2563";
const app = express()
app.get('/2563', handler2563)
app.listen(3000, () => {})
        