
const express = require('express')
import {handler1504} from "./handler1504";
const app = express()
app.get('/1504', handler1504)
app.listen(3000, () => {})
        