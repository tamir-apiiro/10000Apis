
const express = require('express')
import {handler1677} from "./handler1677";
const app = express()
app.get('/1677', handler1677)
app.listen(3000, () => {})
        