
const express = require('express')
import {handler1482} from "./handler1482";
const app = express()
app.get('/1482', handler1482)
app.listen(3000, () => {})
        