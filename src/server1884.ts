
const express = require('express')
import {handler1884} from "./handler1884";
const app = express()
app.get('/1884', handler1884)
app.listen(3000, () => {})
        