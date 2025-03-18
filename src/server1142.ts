
const express = require('express')
import {handler1142} from "./handler1142";
const app = express()
app.get('/1142', handler1142)
app.listen(3000, () => {})
        