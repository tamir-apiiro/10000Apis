
const express = require('express')
import {handler1273} from "./handler1273";
const app = express()
app.get('/1273', handler1273)
app.listen(3000, () => {})
        