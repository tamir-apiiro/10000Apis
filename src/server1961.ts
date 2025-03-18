
const express = require('express')
import {handler1961} from "./handler1961";
const app = express()
app.get('/1961', handler1961)
app.listen(3000, () => {})
        