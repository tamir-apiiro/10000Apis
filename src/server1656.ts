
const express = require('express')
import {handler1656} from "./handler1656";
const app = express()
app.get('/1656', handler1656)
app.listen(3000, () => {})
        