
const express = require('express')
import {handler1757} from "./handler1757";
const app = express()
app.get('/1757', handler1757)
app.listen(3000, () => {})
        