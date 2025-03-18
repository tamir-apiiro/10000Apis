
const express = require('express')
import {handler2951} from "./handler2951";
const app = express()
app.get('/2951', handler2951)
app.listen(3000, () => {})
        