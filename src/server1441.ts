
const express = require('express')
import {handler1441} from "./handler1441";
const app = express()
app.get('/1441', handler1441)
app.listen(3000, () => {})
        