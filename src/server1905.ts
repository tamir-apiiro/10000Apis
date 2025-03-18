
const express = require('express')
import {handler1905} from "./handler1905";
const app = express()
app.get('/1905', handler1905)
app.listen(3000, () => {})
        