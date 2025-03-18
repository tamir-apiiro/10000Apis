
const express = require('express')
import {handler1408} from "./handler1408";
const app = express()
app.get('/1408', handler1408)
app.listen(3000, () => {})
        