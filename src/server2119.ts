
const express = require('express')
import {handler2119} from "./handler2119";
const app = express()
app.get('/2119', handler2119)
app.listen(3000, () => {})
        