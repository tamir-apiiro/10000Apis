
const express = require('express')
import {handler2532} from "./handler2532";
const app = express()
app.get('/2532', handler2532)
app.listen(3000, () => {})
        