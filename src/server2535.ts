
const express = require('express')
import {handler2535} from "./handler2535";
const app = express()
app.get('/2535', handler2535)
app.listen(3000, () => {})
        