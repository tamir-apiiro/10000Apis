
const express = require('express')
import {handler1545} from "./handler1545";
const app = express()
app.get('/1545', handler1545)
app.listen(3000, () => {})
        