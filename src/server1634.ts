
const express = require('express')
import {handler1634} from "./handler1634";
const app = express()
app.get('/1634', handler1634)
app.listen(3000, () => {})
        