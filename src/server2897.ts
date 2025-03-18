
const express = require('express')
import {handler2897} from "./handler2897";
const app = express()
app.get('/2897', handler2897)
app.listen(3000, () => {})
        