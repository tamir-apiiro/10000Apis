
const express = require('express')
import {handler1282} from "./handler1282";
const app = express()
app.get('/1282', handler1282)
app.listen(3000, () => {})
        