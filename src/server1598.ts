
const express = require('express')
import {handler1598} from "./handler1598";
const app = express()
app.get('/1598', handler1598)
app.listen(3000, () => {})
        