
const express = require('express')
import {handler1270} from "./handler1270";
const app = express()
app.get('/1270', handler1270)
app.listen(3000, () => {})
        