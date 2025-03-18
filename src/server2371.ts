
const express = require('express')
import {handler2371} from "./handler2371";
const app = express()
app.get('/2371', handler2371)
app.listen(3000, () => {})
        