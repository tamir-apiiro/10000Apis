
const express = require('express')
import {handler1662} from "./handler1662";
const app = express()
app.get('/1662', handler1662)
app.listen(3000, () => {})
        