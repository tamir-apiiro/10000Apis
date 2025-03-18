
const express = require('express')
import {handler1717} from "./handler1717";
const app = express()
app.get('/1717', handler1717)
app.listen(3000, () => {})
        