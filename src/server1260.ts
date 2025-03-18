
const express = require('express')
import {handler1260} from "./handler1260";
const app = express()
app.get('/1260', handler1260)
app.listen(3000, () => {})
        