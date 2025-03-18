
const express = require('express')
import {handler1149} from "./handler1149";
const app = express()
app.get('/1149', handler1149)
app.listen(3000, () => {})
        