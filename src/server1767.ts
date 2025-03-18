
const express = require('express')
import {handler1767} from "./handler1767";
const app = express()
app.get('/1767', handler1767)
app.listen(3000, () => {})
        