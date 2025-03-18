
const express = require('express')
import {handler1379} from "./handler1379";
const app = express()
app.get('/1379', handler1379)
app.listen(3000, () => {})
        