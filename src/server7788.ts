
const express = require('express')
import {handler7788} from "./handler7788";
const app = express()
app.get('/7788', handler7788)
app.listen(3000, () => {})
        