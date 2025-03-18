
const express = require('express')
import {handler1870} from "./handler1870";
const app = express()
app.get('/1870', handler1870)
app.listen(3000, () => {})
        