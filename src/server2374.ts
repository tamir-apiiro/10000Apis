
const express = require('express')
import {handler2374} from "./handler2374";
const app = express()
app.get('/2374', handler2374)
app.listen(3000, () => {})
        