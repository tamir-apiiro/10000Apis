
const express = require('express')
import {handler1911} from "./handler1911";
const app = express()
app.get('/1911', handler1911)
app.listen(3000, () => {})
        