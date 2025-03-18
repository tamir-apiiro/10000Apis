
const express = require('express')
import {handler2347} from "./handler2347";
const app = express()
app.get('/2347', handler2347)
app.listen(3000, () => {})
        