
const express = require('express')
import {handler2321} from "./handler2321";
const app = express()
app.get('/2321', handler2321)
app.listen(3000, () => {})
        