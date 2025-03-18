
const express = require('express')
import {handler2583} from "./handler2583";
const app = express()
app.get('/2583', handler2583)
app.listen(3000, () => {})
        