
const express = require('express')
import {handler2633} from "./handler2633";
const app = express()
app.get('/2633', handler2633)
app.listen(3000, () => {})
        