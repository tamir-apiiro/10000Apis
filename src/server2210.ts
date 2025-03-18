
const express = require('express')
import {handler2210} from "./handler2210";
const app = express()
app.get('/2210', handler2210)
app.listen(3000, () => {})
        