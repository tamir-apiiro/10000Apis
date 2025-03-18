
const express = require('express')
import {handler2525} from "./handler2525";
const app = express()
app.get('/2525', handler2525)
app.listen(3000, () => {})
        