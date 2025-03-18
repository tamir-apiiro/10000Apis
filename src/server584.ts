
const express = require('express')
import {handler584} from "./handler584";
const app = express()
app.get('/584', handler584)
app.listen(3000, () => {})
        