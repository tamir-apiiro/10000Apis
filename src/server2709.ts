
const express = require('express')
import {handler2709} from "./handler2709";
const app = express()
app.get('/2709', handler2709)
app.listen(3000, () => {})
        