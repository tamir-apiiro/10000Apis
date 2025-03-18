
const express = require('express')
import {handler2181} from "./handler2181";
const app = express()
app.get('/2181', handler2181)
app.listen(3000, () => {})
        