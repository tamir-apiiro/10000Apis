
const express = require('express')
import {handler1112} from "./handler1112";
const app = express()
app.get('/1112', handler1112)
app.listen(3000, () => {})
        