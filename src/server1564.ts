
const express = require('express')
import {handler1564} from "./handler1564";
const app = express()
app.get('/1564', handler1564)
app.listen(3000, () => {})
        