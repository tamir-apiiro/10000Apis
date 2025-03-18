
const express = require('express')
import {handler1592} from "./handler1592";
const app = express()
app.get('/1592', handler1592)
app.listen(3000, () => {})
        