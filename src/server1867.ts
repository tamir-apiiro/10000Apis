
const express = require('express')
import {handler1867} from "./handler1867";
const app = express()
app.get('/1867', handler1867)
app.listen(3000, () => {})
        