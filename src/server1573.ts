
const express = require('express')
import {handler1573} from "./handler1573";
const app = express()
app.get('/1573', handler1573)
app.listen(3000, () => {})
        