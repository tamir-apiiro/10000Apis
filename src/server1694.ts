
const express = require('express')
import {handler1694} from "./handler1694";
const app = express()
app.get('/1694', handler1694)
app.listen(3000, () => {})
        