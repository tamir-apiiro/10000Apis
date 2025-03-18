
const express = require('express')
import {handler1901} from "./handler1901";
const app = express()
app.get('/1901', handler1901)
app.listen(3000, () => {})
        