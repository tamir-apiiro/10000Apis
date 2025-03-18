
const express = require('express')
import {handler2179} from "./handler2179";
const app = express()
app.get('/2179', handler2179)
app.listen(3000, () => {})
        