
const express = require('express')
import {handler1540} from "./handler1540";
const app = express()
app.get('/1540', handler1540)
app.listen(3000, () => {})
        