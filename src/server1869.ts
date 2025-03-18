
const express = require('express')
import {handler1869} from "./handler1869";
const app = express()
app.get('/1869', handler1869)
app.listen(3000, () => {})
        