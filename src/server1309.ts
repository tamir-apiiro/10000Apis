
const express = require('express')
import {handler1309} from "./handler1309";
const app = express()
app.get('/1309', handler1309)
app.listen(3000, () => {})
        