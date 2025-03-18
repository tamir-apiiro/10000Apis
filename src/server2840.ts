
const express = require('express')
import {handler2840} from "./handler2840";
const app = express()
app.get('/2840', handler2840)
app.listen(3000, () => {})
        