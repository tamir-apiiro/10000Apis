
const express = require('express')
import {handler1122} from "./handler1122";
const app = express()
app.get('/1122', handler1122)
app.listen(3000, () => {})
        