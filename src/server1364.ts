
const express = require('express')
import {handler1364} from "./handler1364";
const app = express()
app.get('/1364', handler1364)
app.listen(3000, () => {})
        