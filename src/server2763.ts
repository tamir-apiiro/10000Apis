
const express = require('express')
import {handler2763} from "./handler2763";
const app = express()
app.get('/2763', handler2763)
app.listen(3000, () => {})
        