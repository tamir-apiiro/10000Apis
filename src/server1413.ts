
const express = require('express')
import {handler1413} from "./handler1413";
const app = express()
app.get('/1413', handler1413)
app.listen(3000, () => {})
        