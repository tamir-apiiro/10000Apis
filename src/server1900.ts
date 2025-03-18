
const express = require('express')
import {handler1900} from "./handler1900";
const app = express()
app.get('/1900', handler1900)
app.listen(3000, () => {})
        