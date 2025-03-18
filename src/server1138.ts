
const express = require('express')
import {handler1138} from "./handler1138";
const app = express()
app.get('/1138', handler1138)
app.listen(3000, () => {})
        