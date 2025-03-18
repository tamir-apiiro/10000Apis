
const express = require('express')
import {handler1288} from "./handler1288";
const app = express()
app.get('/1288', handler1288)
app.listen(3000, () => {})
        