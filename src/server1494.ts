
const express = require('express')
import {handler1494} from "./handler1494";
const app = express()
app.get('/1494', handler1494)
app.listen(3000, () => {})
        