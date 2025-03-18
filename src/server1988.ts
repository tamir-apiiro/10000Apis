
const express = require('express')
import {handler1988} from "./handler1988";
const app = express()
app.get('/1988', handler1988)
app.listen(3000, () => {})
        