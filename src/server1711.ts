
const express = require('express')
import {handler1711} from "./handler1711";
const app = express()
app.get('/1711', handler1711)
app.listen(3000, () => {})
        