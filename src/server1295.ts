
const express = require('express')
import {handler1295} from "./handler1295";
const app = express()
app.get('/1295', handler1295)
app.listen(3000, () => {})
        