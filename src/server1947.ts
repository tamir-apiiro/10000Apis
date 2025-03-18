
const express = require('express')
import {handler1947} from "./handler1947";
const app = express()
app.get('/1947', handler1947)
app.listen(3000, () => {})
        