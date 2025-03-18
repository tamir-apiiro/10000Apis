
const express = require('express')
import {handler1231} from "./handler1231";
const app = express()
app.get('/1231', handler1231)
app.listen(3000, () => {})
        