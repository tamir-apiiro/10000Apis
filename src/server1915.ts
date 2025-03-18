
const express = require('express')
import {handler1915} from "./handler1915";
const app = express()
app.get('/1915', handler1915)
app.listen(3000, () => {})
        