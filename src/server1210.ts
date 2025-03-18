
const express = require('express')
import {handler1210} from "./handler1210";
const app = express()
app.get('/1210', handler1210)
app.listen(3000, () => {})
        