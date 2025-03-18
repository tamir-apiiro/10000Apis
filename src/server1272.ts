
const express = require('express')
import {handler1272} from "./handler1272";
const app = express()
app.get('/1272', handler1272)
app.listen(3000, () => {})
        