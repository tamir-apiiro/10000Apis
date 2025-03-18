
const express = require('express')
import {handler2830} from "./handler2830";
const app = express()
app.get('/2830', handler2830)
app.listen(3000, () => {})
        