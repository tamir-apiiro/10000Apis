
const express = require('express')
import {handler1909} from "./handler1909";
const app = express()
app.get('/1909', handler1909)
app.listen(3000, () => {})
        