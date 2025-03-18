
const express = require('express')
import {handler1330} from "./handler1330";
const app = express()
app.get('/1330', handler1330)
app.listen(3000, () => {})
        