
const express = require('express')
import {handler1434} from "./handler1434";
const app = express()
app.get('/1434', handler1434)
app.listen(3000, () => {})
        