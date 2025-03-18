
const express = require('express')
import {handler1788} from "./handler1788";
const app = express()
app.get('/1788', handler1788)
app.listen(3000, () => {})
        