
const express = require('express')
import {handler1660} from "./handler1660";
const app = express()
app.get('/1660', handler1660)
app.listen(3000, () => {})
        