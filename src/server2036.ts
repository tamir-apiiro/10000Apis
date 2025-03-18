
const express = require('express')
import {handler2036} from "./handler2036";
const app = express()
app.get('/2036', handler2036)
app.listen(3000, () => {})
        