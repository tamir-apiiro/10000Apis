
const express = require('express')
import {handler1966} from "./handler1966";
const app = express()
app.get('/1966', handler1966)
app.listen(3000, () => {})
        