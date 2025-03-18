
const express = require('express')
import {handler1173} from "./handler1173";
const app = express()
app.get('/1173', handler1173)
app.listen(3000, () => {})
        