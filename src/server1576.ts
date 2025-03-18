
const express = require('express')
import {handler1576} from "./handler1576";
const app = express()
app.get('/1576', handler1576)
app.listen(3000, () => {})
        