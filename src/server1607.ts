
const express = require('express')
import {handler1607} from "./handler1607";
const app = express()
app.get('/1607', handler1607)
app.listen(3000, () => {})
        