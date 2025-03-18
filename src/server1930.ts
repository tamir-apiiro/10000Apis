
const express = require('express')
import {handler1930} from "./handler1930";
const app = express()
app.get('/1930', handler1930)
app.listen(3000, () => {})
        