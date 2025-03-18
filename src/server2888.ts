
const express = require('express')
import {handler2888} from "./handler2888";
const app = express()
app.get('/2888', handler2888)
app.listen(3000, () => {})
        