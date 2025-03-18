
const express = require('express')
import {handler1163} from "./handler1163";
const app = express()
app.get('/1163', handler1163)
app.listen(3000, () => {})
        