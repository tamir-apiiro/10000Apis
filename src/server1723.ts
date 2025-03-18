
const express = require('express')
import {handler1723} from "./handler1723";
const app = express()
app.get('/1723', handler1723)
app.listen(3000, () => {})
        