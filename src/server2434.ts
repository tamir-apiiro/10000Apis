
const express = require('express')
import {handler2434} from "./handler2434";
const app = express()
app.get('/2434', handler2434)
app.listen(3000, () => {})
        