
const express = require('express')
import {handler2742} from "./handler2742";
const app = express()
app.get('/2742', handler2742)
app.listen(3000, () => {})
        