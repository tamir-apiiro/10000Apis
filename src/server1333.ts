
const express = require('express')
import {handler1333} from "./handler1333";
const app = express()
app.get('/1333', handler1333)
app.listen(3000, () => {})
        