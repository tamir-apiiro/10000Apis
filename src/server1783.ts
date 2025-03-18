
const express = require('express')
import {handler1783} from "./handler1783";
const app = express()
app.get('/1783', handler1783)
app.listen(3000, () => {})
        