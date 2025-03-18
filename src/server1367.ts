
const express = require('express')
import {handler1367} from "./handler1367";
const app = express()
app.get('/1367', handler1367)
app.listen(3000, () => {})
        