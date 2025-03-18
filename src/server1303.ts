
const express = require('express')
import {handler1303} from "./handler1303";
const app = express()
app.get('/1303', handler1303)
app.listen(3000, () => {})
        