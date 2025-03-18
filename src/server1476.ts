
const express = require('express')
import {handler1476} from "./handler1476";
const app = express()
app.get('/1476', handler1476)
app.listen(3000, () => {})
        