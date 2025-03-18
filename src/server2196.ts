
const express = require('express')
import {handler2196} from "./handler2196";
const app = express()
app.get('/2196', handler2196)
app.listen(3000, () => {})
        