
const express = require('express')
import {handler1496} from "./handler1496";
const app = express()
app.get('/1496', handler1496)
app.listen(3000, () => {})
        