
const express = require('express')
import {handler1004} from "./handler1004";
const app = express()
app.get('/1004', handler1004)
app.listen(3000, () => {})
        