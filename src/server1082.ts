
const express = require('express')
import {handler1082} from "./handler1082";
const app = express()
app.get('/1082', handler1082)
app.listen(3000, () => {})
        