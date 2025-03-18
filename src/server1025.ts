
const express = require('express')
import {handler1025} from "./handler1025";
const app = express()
app.get('/1025', handler1025)
app.listen(3000, () => {})
        