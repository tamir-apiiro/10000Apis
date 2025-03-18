
const express = require('express')
import {handler2436} from "./handler2436";
const app = express()
app.get('/2436', handler2436)
app.listen(3000, () => {})
        