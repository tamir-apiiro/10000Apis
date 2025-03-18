
const express = require('express')
import {handler2350} from "./handler2350";
const app = express()
app.get('/2350', handler2350)
app.listen(3000, () => {})
        