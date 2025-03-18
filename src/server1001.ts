
const express = require('express')
import {handler1001} from "./handler1001";
const app = express()
app.get('/1001', handler1001)
app.listen(3000, () => {})
        