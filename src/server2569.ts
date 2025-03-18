
const express = require('express')
import {handler2569} from "./handler2569";
const app = express()
app.get('/2569', handler2569)
app.listen(3000, () => {})
        