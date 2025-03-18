
const express = require('express')
import {handler1745} from "./handler1745";
const app = express()
app.get('/1745', handler1745)
app.listen(3000, () => {})
        