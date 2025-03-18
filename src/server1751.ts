
const express = require('express')
import {handler1751} from "./handler1751";
const app = express()
app.get('/1751', handler1751)
app.listen(3000, () => {})
        