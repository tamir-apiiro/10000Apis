
const express = require('express')
import {handler1836} from "./handler1836";
const app = express()
app.get('/1836', handler1836)
app.listen(3000, () => {})
        