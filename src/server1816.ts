
const express = require('express')
import {handler1816} from "./handler1816";
const app = express()
app.get('/1816', handler1816)
app.listen(3000, () => {})
        