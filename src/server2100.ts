
const express = require('express')
import {handler2100} from "./handler2100";
const app = express()
app.get('/2100', handler2100)
app.listen(3000, () => {})
        