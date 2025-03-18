
const express = require('express')
import {handler1484} from "./handler1484";
const app = express()
app.get('/1484', handler1484)
app.listen(3000, () => {})
        