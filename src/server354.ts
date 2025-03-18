
const express = require('express')
import {handler354} from "./handler354";
const app = express()
app.get('/354', handler354)
app.listen(3000, () => {})
        