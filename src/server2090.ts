
const express = require('express')
import {handler2090} from "./handler2090";
const app = express()
app.get('/2090', handler2090)
app.listen(3000, () => {})
        