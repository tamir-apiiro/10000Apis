
const express = require('express')
import {handler2082} from "./handler2082";
const app = express()
app.get('/2082', handler2082)
app.listen(3000, () => {})
        