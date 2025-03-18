
const express = require('express')
import {handler1571} from "./handler1571";
const app = express()
app.get('/1571', handler1571)
app.listen(3000, () => {})
        