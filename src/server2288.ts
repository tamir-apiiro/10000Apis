
const express = require('express')
import {handler2288} from "./handler2288";
const app = express()
app.get('/2288', handler2288)
app.listen(3000, () => {})
        