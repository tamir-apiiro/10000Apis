
const express = require('express')
import {handler1891} from "./handler1891";
const app = express()
app.get('/1891', handler1891)
app.listen(3000, () => {})
        