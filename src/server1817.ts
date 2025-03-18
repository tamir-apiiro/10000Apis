
const express = require('express')
import {handler1817} from "./handler1817";
const app = express()
app.get('/1817', handler1817)
app.listen(3000, () => {})
        