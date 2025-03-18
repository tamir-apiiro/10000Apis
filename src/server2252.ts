
const express = require('express')
import {handler2252} from "./handler2252";
const app = express()
app.get('/2252', handler2252)
app.listen(3000, () => {})
        