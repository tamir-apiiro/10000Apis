
const express = require('express')
import {handler1195} from "./handler1195";
const app = express()
app.get('/1195', handler1195)
app.listen(3000, () => {})
        