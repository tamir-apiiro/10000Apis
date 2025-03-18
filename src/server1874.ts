
const express = require('express')
import {handler1874} from "./handler1874";
const app = express()
app.get('/1874', handler1874)
app.listen(3000, () => {})
        