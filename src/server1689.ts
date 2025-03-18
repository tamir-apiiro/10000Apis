
const express = require('express')
import {handler1689} from "./handler1689";
const app = express()
app.get('/1689', handler1689)
app.listen(3000, () => {})
        