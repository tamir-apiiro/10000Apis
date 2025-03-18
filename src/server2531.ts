
const express = require('express')
import {handler2531} from "./handler2531";
const app = express()
app.get('/2531', handler2531)
app.listen(3000, () => {})
        