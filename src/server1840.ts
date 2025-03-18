
const express = require('express')
import {handler1840} from "./handler1840";
const app = express()
app.get('/1840', handler1840)
app.listen(3000, () => {})
        