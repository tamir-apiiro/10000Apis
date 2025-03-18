
const express = require('express')
import {handler1596} from "./handler1596";
const app = express()
app.get('/1596', handler1596)
app.listen(3000, () => {})
        