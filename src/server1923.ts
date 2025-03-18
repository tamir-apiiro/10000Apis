
const express = require('express')
import {handler1923} from "./handler1923";
const app = express()
app.get('/1923', handler1923)
app.listen(3000, () => {})
        