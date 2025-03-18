
const express = require('express')
import {handler2559} from "./handler2559";
const app = express()
app.get('/2559', handler2559)
app.listen(3000, () => {})
        