
const express = require('express')
import {handler2854} from "./handler2854";
const app = express()
app.get('/2854', handler2854)
app.listen(3000, () => {})
        