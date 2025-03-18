
const express = require('express')
import {handler1248} from "./handler1248";
const app = express()
app.get('/1248', handler1248)
app.listen(3000, () => {})
        