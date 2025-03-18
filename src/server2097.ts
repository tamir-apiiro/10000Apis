
const express = require('express')
import {handler2097} from "./handler2097";
const app = express()
app.get('/2097', handler2097)
app.listen(3000, () => {})
        