
const express = require('express')
import {handler1179} from "./handler1179";
const app = express()
app.get('/1179', handler1179)
app.listen(3000, () => {})
        