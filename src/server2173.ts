
const express = require('express')
import {handler2173} from "./handler2173";
const app = express()
app.get('/2173', handler2173)
app.listen(3000, () => {})
        