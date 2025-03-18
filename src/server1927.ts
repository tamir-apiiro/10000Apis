
const express = require('express')
import {handler1927} from "./handler1927";
const app = express()
app.get('/1927', handler1927)
app.listen(3000, () => {})
        