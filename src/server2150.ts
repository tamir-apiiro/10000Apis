
const express = require('express')
import {handler2150} from "./handler2150";
const app = express()
app.get('/2150', handler2150)
app.listen(3000, () => {})
        