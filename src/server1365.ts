
const express = require('express')
import {handler1365} from "./handler1365";
const app = express()
app.get('/1365', handler1365)
app.listen(3000, () => {})
        