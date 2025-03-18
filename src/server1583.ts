
const express = require('express')
import {handler1583} from "./handler1583";
const app = express()
app.get('/1583', handler1583)
app.listen(3000, () => {})
        