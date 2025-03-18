
const express = require('express')
import {handler2311} from "./handler2311";
const app = express()
app.get('/2311', handler2311)
app.listen(3000, () => {})
        