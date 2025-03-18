
const express = require('express')
import {handler2044} from "./handler2044";
const app = express()
app.get('/2044', handler2044)
app.listen(3000, () => {})
        