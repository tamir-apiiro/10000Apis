
const express = require('express')
import {handler1457} from "./handler1457";
const app = express()
app.get('/1457', handler1457)
app.listen(3000, () => {})
        