
const express = require('express')
import {handler1683} from "./handler1683";
const app = express()
app.get('/1683', handler1683)
app.listen(3000, () => {})
        