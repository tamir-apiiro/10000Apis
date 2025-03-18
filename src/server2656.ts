
const express = require('express')
import {handler2656} from "./handler2656";
const app = express()
app.get('/2656', handler2656)
app.listen(3000, () => {})
        