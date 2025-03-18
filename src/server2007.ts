
const express = require('express')
import {handler2007} from "./handler2007";
const app = express()
app.get('/2007', handler2007)
app.listen(3000, () => {})
        