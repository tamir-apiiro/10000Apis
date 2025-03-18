
const express = require('express')
import {handler1099} from "./handler1099";
const app = express()
app.get('/1099', handler1099)
app.listen(3000, () => {})
        