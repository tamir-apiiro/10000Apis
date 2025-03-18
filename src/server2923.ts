
const express = require('express')
import {handler2923} from "./handler2923";
const app = express()
app.get('/2923', handler2923)
app.listen(3000, () => {})
        