
const express = require('express')
import {handler1951} from "./handler1951";
const app = express()
app.get('/1951', handler1951)
app.listen(3000, () => {})
        