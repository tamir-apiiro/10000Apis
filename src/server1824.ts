
const express = require('express')
import {handler1824} from "./handler1824";
const app = express()
app.get('/1824', handler1824)
app.listen(3000, () => {})
        