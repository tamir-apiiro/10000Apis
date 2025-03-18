
const express = require('express')
import {handler2810} from "./handler2810";
const app = express()
app.get('/2810', handler2810)
app.listen(3000, () => {})
        