
const express = require('express')
import {handler1077} from "./handler1077";
const app = express()
app.get('/1077', handler1077)
app.listen(3000, () => {})
        