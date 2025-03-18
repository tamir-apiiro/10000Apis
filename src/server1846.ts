
const express = require('express')
import {handler1846} from "./handler1846";
const app = express()
app.get('/1846', handler1846)
app.listen(3000, () => {})
        