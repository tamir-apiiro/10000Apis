
const express = require('express')
import {handler1086} from "./handler1086";
const app = express()
app.get('/1086', handler1086)
app.listen(3000, () => {})
        