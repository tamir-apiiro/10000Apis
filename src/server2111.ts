
const express = require('express')
import {handler2111} from "./handler2111";
const app = express()
app.get('/2111', handler2111)
app.listen(3000, () => {})
        