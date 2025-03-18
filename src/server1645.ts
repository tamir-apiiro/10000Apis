
const express = require('express')
import {handler1645} from "./handler1645";
const app = express()
app.get('/1645', handler1645)
app.listen(3000, () => {})
        