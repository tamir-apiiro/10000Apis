
const express = require('express')
import {handler2665} from "./handler2665";
const app = express()
app.get('/2665', handler2665)
app.listen(3000, () => {})
        