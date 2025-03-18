
const express = require('express')
import {handler1805} from "./handler1805";
const app = express()
app.get('/1805', handler1805)
app.listen(3000, () => {})
        