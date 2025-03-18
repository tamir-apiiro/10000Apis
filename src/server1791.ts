
const express = require('express')
import {handler1791} from "./handler1791";
const app = express()
app.get('/1791', handler1791)
app.listen(3000, () => {})
        