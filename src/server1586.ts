
const express = require('express')
import {handler1586} from "./handler1586";
const app = express()
app.get('/1586', handler1586)
app.listen(3000, () => {})
        