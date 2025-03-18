
const express = require('express')
import {handler1346} from "./handler1346";
const app = express()
app.get('/1346', handler1346)
app.listen(3000, () => {})
        