
const express = require('express')
import {handler1395} from "./handler1395";
const app = express()
app.get('/1395', handler1395)
app.listen(3000, () => {})
        