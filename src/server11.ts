
const express = require('express')
import {handler11} from "./handler11";
const app = express()
app.get('/11', handler11)
app.listen(3000, () => {})
        