
const express = require('express')
import {handler1976} from "./handler1976";
const app = express()
app.get('/1976', handler1976)
app.listen(3000, () => {})
        