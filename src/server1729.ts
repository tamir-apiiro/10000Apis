
const express = require('express')
import {handler1729} from "./handler1729";
const app = express()
app.get('/1729', handler1729)
app.listen(3000, () => {})
        