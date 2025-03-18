
const express = require('express')
import {handler1799} from "./handler1799";
const app = express()
app.get('/1799', handler1799)
app.listen(3000, () => {})
        