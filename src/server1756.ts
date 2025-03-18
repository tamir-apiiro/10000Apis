
const express = require('express')
import {handler1756} from "./handler1756";
const app = express()
app.get('/1756', handler1756)
app.listen(3000, () => {})
        