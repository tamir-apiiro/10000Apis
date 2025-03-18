
const express = require('express')
import {handler2575} from "./handler2575";
const app = express()
app.get('/2575', handler2575)
app.listen(3000, () => {})
        