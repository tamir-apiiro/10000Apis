
const express = require('express')
import {handler2208} from "./handler2208";
const app = express()
app.get('/2208', handler2208)
app.listen(3000, () => {})
        