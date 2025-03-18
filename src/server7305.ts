
const express = require('express')
import {handler7305} from "./handler7305";
const app = express()
app.get('/7305', handler7305)
app.listen(3000, () => {})
        