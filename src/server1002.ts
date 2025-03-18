
const express = require('express')
import {handler1002} from "./handler1002";
const app = express()
app.get('/1002', handler1002)
app.listen(3000, () => {})
        