
const express = require('express')
import {handler1498} from "./handler1498";
const app = express()
app.get('/1498', handler1498)
app.listen(3000, () => {})
        