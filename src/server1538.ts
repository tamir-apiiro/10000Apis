
const express = require('express')
import {handler1538} from "./handler1538";
const app = express()
app.get('/1538', handler1538)
app.listen(3000, () => {})
        