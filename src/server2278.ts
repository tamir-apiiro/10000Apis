
const express = require('express')
import {handler2278} from "./handler2278";
const app = express()
app.get('/2278', handler2278)
app.listen(3000, () => {})
        