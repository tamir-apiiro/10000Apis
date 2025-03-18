
const express = require('express')
import {handler76} from "./handler76";
const app = express()
app.get('/76', handler76)
app.listen(3000, () => {})
        