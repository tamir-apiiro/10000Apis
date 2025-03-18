
const express = require('express')
import {handler2506} from "./handler2506";
const app = express()
app.get('/2506', handler2506)
app.listen(3000, () => {})
        