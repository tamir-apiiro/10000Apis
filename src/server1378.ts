
const express = require('express')
import {handler1378} from "./handler1378";
const app = express()
app.get('/1378', handler1378)
app.listen(3000, () => {})
        