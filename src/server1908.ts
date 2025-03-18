
const express = require('express')
import {handler1908} from "./handler1908";
const app = express()
app.get('/1908', handler1908)
app.listen(3000, () => {})
        