
const express = require('express')
import {handler1665} from "./handler1665";
const app = express()
app.get('/1665', handler1665)
app.listen(3000, () => {})
        