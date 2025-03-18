
const express = require('express')
import {handler1438} from "./handler1438";
const app = express()
app.get('/1438', handler1438)
app.listen(3000, () => {})
        