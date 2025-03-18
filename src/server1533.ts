
const express = require('express')
import {handler1533} from "./handler1533";
const app = express()
app.get('/1533', handler1533)
app.listen(3000, () => {})
        