
const express = require('express')
import {handler1157} from "./handler1157";
const app = express()
app.get('/1157', handler1157)
app.listen(3000, () => {})
        