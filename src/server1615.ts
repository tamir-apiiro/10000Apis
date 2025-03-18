
const express = require('express')
import {handler1615} from "./handler1615";
const app = express()
app.get('/1615', handler1615)
app.listen(3000, () => {})
        