
const express = require('express')
import {handler2413} from "./handler2413";
const app = express()
app.get('/2413', handler2413)
app.listen(3000, () => {})
        