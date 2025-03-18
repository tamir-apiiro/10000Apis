
const express = require('express')
import {handler1529} from "./handler1529";
const app = express()
app.get('/1529', handler1529)
app.listen(3000, () => {})
        