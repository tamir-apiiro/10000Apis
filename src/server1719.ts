
const express = require('express')
import {handler1719} from "./handler1719";
const app = express()
app.get('/1719', handler1719)
app.listen(3000, () => {})
        