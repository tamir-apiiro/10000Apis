
const express = require('express')
import {handler1713} from "./handler1713";
const app = express()
app.get('/1713', handler1713)
app.listen(3000, () => {})
        