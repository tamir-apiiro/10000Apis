
const express = require('express')
import {handler1880} from "./handler1880";
const app = express()
app.get('/1880', handler1880)
app.listen(3000, () => {})
        