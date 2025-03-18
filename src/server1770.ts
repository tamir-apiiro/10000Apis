
const express = require('express')
import {handler1770} from "./handler1770";
const app = express()
app.get('/1770', handler1770)
app.listen(3000, () => {})
        