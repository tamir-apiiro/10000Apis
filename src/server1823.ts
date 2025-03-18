
const express = require('express')
import {handler1823} from "./handler1823";
const app = express()
app.get('/1823', handler1823)
app.listen(3000, () => {})
        