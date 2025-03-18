
const express = require('express')
import {handler2966} from "./handler2966";
const app = express()
app.get('/2966', handler2966)
app.listen(3000, () => {})
        