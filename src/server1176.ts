
const express = require('express')
import {handler1176} from "./handler1176";
const app = express()
app.get('/1176', handler1176)
app.listen(3000, () => {})
        