
const express = require('express')
import {handler1111} from "./handler1111";
const app = express()
app.get('/1111', handler1111)
app.listen(3000, () => {})
        