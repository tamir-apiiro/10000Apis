
const express = require('express')
import {handler1876} from "./handler1876";
const app = express()
app.get('/1876', handler1876)
app.listen(3000, () => {})
        