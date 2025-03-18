
const express = require('express')
import {handler2262} from "./handler2262";
const app = express()
app.get('/2262', handler2262)
app.listen(3000, () => {})
        