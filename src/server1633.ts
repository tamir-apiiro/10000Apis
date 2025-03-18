
const express = require('express')
import {handler1633} from "./handler1633";
const app = express()
app.get('/1633', handler1633)
app.listen(3000, () => {})
        