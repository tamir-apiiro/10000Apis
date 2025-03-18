
const express = require('express')
import {handler1558} from "./handler1558";
const app = express()
app.get('/1558', handler1558)
app.listen(3000, () => {})
        