
const express = require('express')
import {handler1636} from "./handler1636";
const app = express()
app.get('/1636', handler1636)
app.listen(3000, () => {})
        