
const express = require('express')
import {handler2049} from "./handler2049";
const app = express()
app.get('/2049', handler2049)
app.listen(3000, () => {})
        