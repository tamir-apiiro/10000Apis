
const express = require('express')
import {handler2979} from "./handler2979";
const app = express()
app.get('/2979', handler2979)
app.listen(3000, () => {})
        