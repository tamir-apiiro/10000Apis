
const express = require('express')
import {handler1354} from "./handler1354";
const app = express()
app.get('/1354', handler1354)
app.listen(3000, () => {})
        