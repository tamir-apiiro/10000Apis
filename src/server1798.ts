
const express = require('express')
import {handler1798} from "./handler1798";
const app = express()
app.get('/1798', handler1798)
app.listen(3000, () => {})
        