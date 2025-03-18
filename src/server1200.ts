
const express = require('express')
import {handler1200} from "./handler1200";
const app = express()
app.get('/1200', handler1200)
app.listen(3000, () => {})
        