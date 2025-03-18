
const express = require('express')
import {handler1738} from "./handler1738";
const app = express()
app.get('/1738', handler1738)
app.listen(3000, () => {})
        