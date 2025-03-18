
const express = require('express')
import {handler1819} from "./handler1819";
const app = express()
app.get('/1819', handler1819)
app.listen(3000, () => {})
        