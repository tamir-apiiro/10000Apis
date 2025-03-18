
const express = require('express')
import {handler2341} from "./handler2341";
const app = express()
app.get('/2341', handler2341)
app.listen(3000, () => {})
        