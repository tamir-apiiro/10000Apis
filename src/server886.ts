
const express = require('express')
import {handler886} from "./handler886";
const app = express()
app.get('/886', handler886)
app.listen(3000, () => {})
        