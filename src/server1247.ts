
const express = require('express')
import {handler1247} from "./handler1247";
const app = express()
app.get('/1247', handler1247)
app.listen(3000, () => {})
        