
const express = require('express')
import {handler1894} from "./handler1894";
const app = express()
app.get('/1894', handler1894)
app.listen(3000, () => {})
        