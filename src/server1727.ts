
const express = require('express')
import {handler1727} from "./handler1727";
const app = express()
app.get('/1727', handler1727)
app.listen(3000, () => {})
        