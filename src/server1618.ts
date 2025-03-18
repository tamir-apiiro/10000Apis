
const express = require('express')
import {handler1618} from "./handler1618";
const app = express()
app.get('/1618', handler1618)
app.listen(3000, () => {})
        