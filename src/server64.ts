
const express = require('express')
import {handler64} from "./handler64";
const app = express()
app.get('/64', handler64)
app.listen(3000, () => {})
        