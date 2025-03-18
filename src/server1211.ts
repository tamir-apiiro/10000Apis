
const express = require('express')
import {handler1211} from "./handler1211";
const app = express()
app.get('/1211', handler1211)
app.listen(3000, () => {})
        