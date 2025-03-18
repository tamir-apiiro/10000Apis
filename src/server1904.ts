
const express = require('express')
import {handler1904} from "./handler1904";
const app = express()
app.get('/1904', handler1904)
app.listen(3000, () => {})
        