
const express = require('express')
import {handler2938} from "./handler2938";
const app = express()
app.get('/2938', handler2938)
app.listen(3000, () => {})
        