
const express = require('express')
import {handler2800} from "./handler2800";
const app = express()
app.get('/2800', handler2800)
app.listen(3000, () => {})
        