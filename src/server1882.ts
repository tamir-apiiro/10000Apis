
const express = require('express')
import {handler1882} from "./handler1882";
const app = express()
app.get('/1882', handler1882)
app.listen(3000, () => {})
        