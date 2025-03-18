
const express = require('express')
import {handler1246} from "./handler1246";
const app = express()
app.get('/1246', handler1246)
app.listen(3000, () => {})
        