
const express = require('express')
import {handler1570} from "./handler1570";
const app = express()
app.get('/1570', handler1570)
app.listen(3000, () => {})
        