
const express = require('express')
import {handler2295} from "./handler2295";
const app = express()
app.get('/2295', handler2295)
app.listen(3000, () => {})
        