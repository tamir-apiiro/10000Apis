
const express = require('express')
import {handler1544} from "./handler1544";
const app = express()
app.get('/1544', handler1544)
app.listen(3000, () => {})
        