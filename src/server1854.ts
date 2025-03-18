
const express = require('express')
import {handler1854} from "./handler1854";
const app = express()
app.get('/1854', handler1854)
app.listen(3000, () => {})
        