
const express = require('express')
import {handler1335} from "./handler1335";
const app = express()
app.get('/1335', handler1335)
app.listen(3000, () => {})
        