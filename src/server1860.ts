
const express = require('express')
import {handler1860} from "./handler1860";
const app = express()
app.get('/1860', handler1860)
app.listen(3000, () => {})
        