
const express = require('express')
import {handler2222} from "./handler2222";
const app = express()
app.get('/2222', handler2222)
app.listen(3000, () => {})
        