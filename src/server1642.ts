
const express = require('express')
import {handler1642} from "./handler1642";
const app = express()
app.get('/1642', handler1642)
app.listen(3000, () => {})
        