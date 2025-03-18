
const express = require('express')
import {handler1595} from "./handler1595";
const app = express()
app.get('/1595', handler1595)
app.listen(3000, () => {})
        