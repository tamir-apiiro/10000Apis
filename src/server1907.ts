
const express = require('express')
import {handler1907} from "./handler1907";
const app = express()
app.get('/1907', handler1907)
app.listen(3000, () => {})
        