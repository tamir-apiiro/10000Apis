
const express = require('express')
import {handler1525} from "./handler1525";
const app = express()
app.get('/1525', handler1525)
app.listen(3000, () => {})
        