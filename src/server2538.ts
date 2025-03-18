
const express = require('express')
import {handler2538} from "./handler2538";
const app = express()
app.get('/2538', handler2538)
app.listen(3000, () => {})
        