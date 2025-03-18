
const express = require('express')
import {handler1895} from "./handler1895";
const app = express()
app.get('/1895', handler1895)
app.listen(3000, () => {})
        