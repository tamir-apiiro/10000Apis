
const express = require('express')
import {handler1252} from "./handler1252";
const app = express()
app.get('/1252', handler1252)
app.listen(3000, () => {})
        