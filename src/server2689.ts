
const express = require('express')
import {handler2689} from "./handler2689";
const app = express()
app.get('/2689', handler2689)
app.listen(3000, () => {})
        