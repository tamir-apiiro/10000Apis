
const express = require('express')
import {handler1251} from "./handler1251";
const app = express()
app.get('/1251', handler1251)
app.listen(3000, () => {})
        