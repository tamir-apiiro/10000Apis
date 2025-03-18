
const express = require('express')
import {handler2965} from "./handler2965";
const app = express()
app.get('/2965', handler2965)
app.listen(3000, () => {})
        