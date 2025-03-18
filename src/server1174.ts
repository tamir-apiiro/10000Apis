
const express = require('express')
import {handler1174} from "./handler1174";
const app = express()
app.get('/1174', handler1174)
app.listen(3000, () => {})
        