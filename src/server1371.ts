
const express = require('express')
import {handler1371} from "./handler1371";
const app = express()
app.get('/1371', handler1371)
app.listen(3000, () => {})
        