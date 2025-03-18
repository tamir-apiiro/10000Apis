
const express = require('express')
import {handler1458} from "./handler1458";
const app = express()
app.get('/1458', handler1458)
app.listen(3000, () => {})
        