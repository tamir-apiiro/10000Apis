
const express = require('express')
import {handler2547} from "./handler2547";
const app = express()
app.get('/2547', handler2547)
app.listen(3000, () => {})
        