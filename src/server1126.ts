
const express = require('express')
import {handler1126} from "./handler1126";
const app = express()
app.get('/1126', handler1126)
app.listen(3000, () => {})
        