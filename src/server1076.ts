
const express = require('express')
import {handler1076} from "./handler1076";
const app = express()
app.get('/1076', handler1076)
app.listen(3000, () => {})
        