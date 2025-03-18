
const express = require('express')
import {handler2198} from "./handler2198";
const app = express()
app.get('/2198', handler2198)
app.listen(3000, () => {})
        