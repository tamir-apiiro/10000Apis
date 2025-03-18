
const express = require('express')
import {handler1796} from "./handler1796";
const app = express()
app.get('/1796', handler1796)
app.listen(3000, () => {})
        