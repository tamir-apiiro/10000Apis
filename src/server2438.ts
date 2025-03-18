
const express = require('express')
import {handler2438} from "./handler2438";
const app = express()
app.get('/2438', handler2438)
app.listen(3000, () => {})
        