
const express = require('express')
import {handler1160} from "./handler1160";
const app = express()
app.get('/1160', handler1160)
app.listen(3000, () => {})
        