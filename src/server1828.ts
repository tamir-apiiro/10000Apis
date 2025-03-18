
const express = require('express')
import {handler1828} from "./handler1828";
const app = express()
app.get('/1828', handler1828)
app.listen(3000, () => {})
        