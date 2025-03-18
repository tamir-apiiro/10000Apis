
const express = require('express')
import {handler1841} from "./handler1841";
const app = express()
app.get('/1841', handler1841)
app.listen(3000, () => {})
        