
const express = require('express')
import {handler2486} from "./handler2486";
const app = express()
app.get('/2486', handler2486)
app.listen(3000, () => {})
        