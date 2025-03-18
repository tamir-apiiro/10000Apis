
const express = require('express')
import {handler1358} from "./handler1358";
const app = express()
app.get('/1358', handler1358)
app.listen(3000, () => {})
        