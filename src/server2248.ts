
const express = require('express')
import {handler2248} from "./handler2248";
const app = express()
app.get('/2248', handler2248)
app.listen(3000, () => {})
        