
const express = require('express')
import {handler1765} from "./handler1765";
const app = express()
app.get('/1765', handler1765)
app.listen(3000, () => {})
        