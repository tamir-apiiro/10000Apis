
const express = require('express')
import {handler721} from "./handler721";
const app = express()
app.get('/721', handler721)
app.listen(3000, () => {})
        