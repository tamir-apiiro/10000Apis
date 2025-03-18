
const express = require('express')
import {handler1277} from "./handler1277";
const app = express()
app.get('/1277', handler1277)
app.listen(3000, () => {})
        