
const express = require('express')
import {handler2715} from "./handler2715";
const app = express()
app.get('/2715', handler2715)
app.listen(3000, () => {})
        