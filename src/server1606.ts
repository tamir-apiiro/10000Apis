
const express = require('express')
import {handler1606} from "./handler1606";
const app = express()
app.get('/1606', handler1606)
app.listen(3000, () => {})
        