
const express = require('express')
import {handler2927} from "./handler2927";
const app = express()
app.get('/2927', handler2927)
app.listen(3000, () => {})
        