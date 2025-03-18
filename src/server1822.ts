
const express = require('express')
import {handler1822} from "./handler1822";
const app = express()
app.get('/1822', handler1822)
app.listen(3000, () => {})
        