
const express = require('express')
import {handler1490} from "./handler1490";
const app = express()
app.get('/1490', handler1490)
app.listen(3000, () => {})
        