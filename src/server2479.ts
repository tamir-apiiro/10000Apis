
const express = require('express')
import {handler2479} from "./handler2479";
const app = express()
app.get('/2479', handler2479)
app.listen(3000, () => {})
        