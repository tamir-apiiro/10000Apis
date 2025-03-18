
const express = require('express')
import {handler1686} from "./handler1686";
const app = express()
app.get('/1686', handler1686)
app.listen(3000, () => {})
        