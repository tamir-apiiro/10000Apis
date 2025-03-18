
const express = require('express')
import {handler1233} from "./handler1233";
const app = express()
app.get('/1233', handler1233)
app.listen(3000, () => {})
        